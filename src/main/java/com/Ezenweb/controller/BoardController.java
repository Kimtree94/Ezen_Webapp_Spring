package com.Ezenweb.controller;

import com.Ezenweb.domain.Dto.BcategoryDto;
import com.Ezenweb.domain.Dto.BoardDto;
import com.Ezenweb.domain.Dto.GcategoryDto;
import com.Ezenweb.domain.Dto.gBoardDto;
import com.Ezenweb.service.BoardService;
import com.Ezenweb.service.GuestbookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController// 해당 클래스가 컨트롤 목적으로 사용 @ResponseBody 생 략 @Controller+ResponseBody
@RequestMapping("/board") // 해당 클래스 안에있는 Mapping 들의 공통 URL
public class BoardController {


    //컨트롤 역할 : HTTP 요청 /ModelAndView 응답

    //-------------------1.전역변수----------------------//
    // -서비스 메소드 호출을 위한 객체 생성 [제어역전]
    //1.개발자가 new 연산자 사용해서 JVM(힙)에 메모리 할당해서 객체 생성
    //private BoardService boardService = new BoardService();
    //2.@Autowired 어노테이션을 이용해서 Spring 컨테이너에 빈[메모리] 생성
    @Autowired
    private BoardService boardService;
    @Autowired
    private GuestbookService guestbookService;

    //-------------------2.페이지 요청 로드 [view]----------------------//
    //1.게시물목록 페이지 열기
    @GetMapping("/list")//URL :localhost:8080/board/list 요청시 html반환
    public Resource getlist() {
        return new ClassPathResource("templates/board/list.html");
    }

    //2.게시물쓰기 페이지 열기
    @GetMapping("/write")//URL :localhost:8080/board/write 요청시 html반환
    public Resource getwrite() {
        return new ClassPathResource("templates/board/write.html");
    }

    //3.게시물조회 페이지 열기
    @GetMapping("/view")//URL :localhost:8080/board/view 요청시 html반환
    public Resource getview() {
        return new ClassPathResource("templates/board/view.html");
    }

    //4.게시물수정 페이지 열기
    @GetMapping("/update")//URL :localhost:8080/board/update 요청시 html반환
    public Resource getupdate() {
        return new ClassPathResource("templates/board/update.html");
    }

    @GetMapping("/guestbook")
    public Resource getguestbook() {
        return new ClassPathResource("templates/board/guestbook.html");
    }

    //-------------------3.요청과응답 처리 [model]----------------------//
    //1.HTTP 요청 메소드 매핑 : @PostMapping @GetMapping @DeleteMapping @PutMapping
    //2.HTTP 요청 메소드 매핑 :@RequestBody @RequestParam @PathVariable
    //1.게시물 쓰기 [ 첨부파일 ]
    @PostMapping("/setboard")
    public boolean setboard(@RequestBody BoardDto boardDto) {
        System.out.println("boardDto받기 :" + boardDto.toString());
        return boardService.setboard(boardDto);
    }

    //2.게시물 목록 조회 [ 페이징,검색 ]
    @GetMapping("/boardlist")
    public List<BoardDto> boardlist(@RequestParam("bcno") int bcno) {
        return boardService.boardlist(bcno);
    }

    //3.게시물 개별 조회
    @GetMapping("/getboard")
    public BoardDto getboard(@RequestParam("bno") int bno) {
        return boardService.getboard(bno);
    }

    //4.게시물 삭제
    @DeleteMapping("/delboard")
    public boolean delboard(@RequestParam("bno") int bno) {
        return boardService.delboard(bno);
    }

    //5.게시물 수정 [ 첨부파일 ]
    @PutMapping("/upboard")
    public boolean upboard(@RequestBody BoardDto boardDto) {
        return boardService.upboard(boardDto);
    }
    //@GetMapping("/bcount")
    //public boolean bcount(@RequestParam("bno") int bno){return boardService.bcount(bno);}

    //6.카테고리 등록
    @PostMapping("/setbcategory")
    public boolean setbcategory(@RequestBody BcategoryDto bcategoryDto) {
        return boardService.setbcategory(bcategoryDto);
    }

    //7.모든 카테고리 출력
    @GetMapping("/bcategorylist")
    public List<BcategoryDto> bcategorylist() {
        return boardService.bcategorylist();
    }

    //과제
    @PostMapping("/setgboard")
    public boolean setgboard(@RequestBody gBoardDto gboardDto) {
        System.out.println("boardDto받기 :" + gboardDto.toString());
        return guestbookService.setgboard(gboardDto);
    }

    @PostMapping("/guestcate")
    public boolean guestcate(@RequestBody GcategoryDto gcategoryDto) {
        return guestbookService.guestcate(gcategoryDto);
    }

    @GetMapping("/guestcatelist")
    public List<GcategoryDto> guestcatelist() {
        return guestbookService.guestcatelist();
    }

}
