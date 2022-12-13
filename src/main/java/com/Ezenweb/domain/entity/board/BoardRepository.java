package com.Ezenweb.domain.entity.board;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<BoardEntity, Integer> {
    //1. 기본 메소드 외 메소드 추가
    //.findById(pk값 ) 해당 pk의 엔티티 하나 호출
    //.findAll : 모든 엔티티 호출
    // .[ 직접 find 만들기 ] : .findBy필드명     [optional<엔티티명>]
    //                        .findBy필드명(값) [엔티티명]
    //                        .findBy필드명(값) [List<엔티티명>]
    //                        .findBy필드명(조건 , Pageable pageable ) [page <엔티티명>]
    //@Query : JPQL : sql 사용자 정의
    //Page 사용하는 이유 페이징처리 할려고
    //1.@Query ( value ="쿼리문작성" , nativeQuery =true)
    // SQL[쿼리문 ] 변수 넣기
    // [ 인수 ] @Param("변수명") 자료형 변수명 --------> : 변수명
    // [ 인수 ] (자료형 변수명 , 자료형 변수명 ) ------>? 인수번호
    //@Param("변수명") 생략가능 [jdk 8 이상 ]
  /*  @Query(value = "select * from board where bcno=:bcno", nativeQuery = true)
    Page<BoardEntity> findBybcno(int bcno, Pageable pageable);*/

    //1.제목 검색
 /*   @Query(value = "select*from board where bcno =:bcno and btitle like %:keyword%", nativeQuery = true)
    Page<BoardEntity> findBybtitle(int bcno, String keyword, Pageable pageable);

    //2.내용 검색
    @Query(value = "select * from board where bcno =:bcno and bcontent like%:keyword%", nativeQuery = true)
    Page<BoardEntity> findBybcontent(int bcno, String keyword, Pageable pageable);

    @Query(value = "select * from board where bcno = :bcno", nativeQuery = true)
    Page<BoardEntity> findBybcno(@Param("bcno") int bcno, Pageable pageable);*/
    //2.
    /*    @Query(value = "select p from board  p  where p.bcno=:?!", nativeQuery = true)
                                p는  board 별칭
    Page<BoardEntity> findBybcno(int bcno, Pageable pageable);*/

    //1~3 통합
    @Query(value = "select * from board " +
            "where  "+
            "IF( :bcno = 0 , bcno like '%%' , bcno = :bcno ) and " +
            "IF( :key = '' , true  , IF( :key = 'btitle' , btitle like %:keyword% , bcontent like %:keyword% ) ) "
            , nativeQuery = true ) // nativeQuery: 실제 해당 SQL 질의어 사용 뜻
    Page<BoardEntity> findBySearch(@Param("bcno") int bcno , @Param("key") String key , @Param("keyword")String keyword ,Pageable pageable);

}
