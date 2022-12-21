import React, {useState, useEffect, useRef} from 'react';
import {useDaumPostcodePopup} from 'react-daum-postcode';
import axios from "axios";
import icon from'../../img/roomicon.png'
    // 스프링 통합 배포시  : resource --> static - >static - >media -> 배포된 이미지 존재
/*-------*/

/* 2.전역변수 */

/*--------- */

// 3.컴포넌트[함수] 만들기
export default function RoomWrite(props) {

    /* ------------ 카카오 주소 api  -------------------*/
    //0. 검색된 주소 저장하는 state
    const [address, setAddress] = useState({name: '', lat: '', lng: ''});
    //1. 다음 주소 API 사용하기 위한 API 스크립트
    const open = useDaumPostcodePopup("//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js");
    //2.

    const handleClick = () => {
        open({onComplete: handleComplete});
    };
    //3 다음 주소 검색 결과 이벤트
    const handleComplete = (data) => {

        axios.get("https://dapi.kakao.com/v2/local/search/address.json?query=" + data.address
            , {headers: {Authorization: 'KakaoAK b9157166d1587f60a8ff9bf7e7c9a4f1'}})
            .then(res => {
                const location = res.data.documents[0]
                console.log("위도===");
                console.log(location.x);

                console.log("경도 ===");
                console.log(location.y);

                //5. State 업데이트
                setAddress({name: data.address, lat: location.y, lng: location.x})
            })
    };


    /*----------------------------카카오지도 ---------------------*/
    const mapContainer = useRef(null);
    const {kakao} = window;
    console.log(window)
    const mapOption = { // 3.지도 옵션 [ 중심좌표 및 확대레벨 ]
        center: new kakao.maps.LatLng(address.lat, address.lng), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };
    useEffect(() => {
        var map = new kakao.maps.Map(mapContainer.current, mapOption); // 지도를 표시할 div

        //2.
        // 마커 이미지의 주소
        var markerImageUrl = 'http://localhost:8080/static/media/roomicon.ee4c2a80a3a97409b863.png',
            markerImageSize = new kakao.maps.Size(40, 42), // 마커 이미지의 크기
            markerImageOptions = {
                offset: new kakao.maps.Point(20, 42)// 마커 좌표에 일치시킬 이미지 안의 좌표
            };

        // 마커 이미지를 생성한다
        var markerImage = new kakao.maps.MarkerImage(markerImageUrl, markerImageSize, markerImageOptions);

        // 지도에 마커를 생성하고 표시한다
        var marker = new kakao.maps.Marker({
            position: new kakao.maps.LatLng(address.lat, address.lng), // 마커의 좌표
            image: markerImage, // 마커의 이미지
            map: map // 마커를 표시할 지도 객체
        });

    })
    /* ------------------------------------------ */
    //4. 방 등록 버튼을 눌렀을때 이벤트
    const onWrite = () => {
        let formbox = document.querySelector('.formbox')
        let formdata = new FormData(formbox);   // 폼전체
        formdata.set("rname",address.name); // 폼 전체 + 주소정보
        formdata.set("rlat",address.lat);   // 폼 전체 + 좌표
        formdata.set("rlng",address.lng);   // 폼 전체 + 좌표

        axios.post("/room/setroom",formdata,{headers:{'Content-Type':'multipart/form-data'}})
            .then(res=>{
                if(res.data===true){alert("방 등록 성공");window.location.href="/";}
                else{alert("방 등록 실패스")}
            })
    }

    /* ------------ 5. html or jsx표현식 { }------------------*/
    return (
        <>
                <h3> 방 등록 </h3>
                <form className="formbox">
                    방이름 : <input type="text" name="rtitle"/>
                    방가격 : <input type="text" name="rprice"/>
                    거래방식:
                    <select name="rtrans">
                        <option value={"매매"}>매매</option>
                        <option value={"전세"}>전세</option>
                        <option value={"월세"}>월세</option>
                    </select><br/>
                    이미지 : <input type="file" multiple="multiple" name="rimg"/>

                    {/*카카오 주소 api*/}
                    위치 [ 좌표 ] :
                    <div>{address.name}</div>
                    <button type='button' onClick={handleClick}>
                        위치찾기
                    </button>

                    {/*카카오 map */}
                    {/*jsx 스타일링 style = {{속성 : 값 , 속성 : 값}}*/}
                    <div id="map"
                         ref={mapContainer}
                         style={{width: '100%', height: '350px'}}></div>
                    <button type="button" onClick={onWrite}>등록</button>
                </form>
        </>
    );
    /* -------------------------------------------*/
}
