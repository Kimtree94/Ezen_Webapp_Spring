package com.Ezenweb.config;


import com.Ezenweb.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;


@Configuration // 설정 컴포넌트 주입
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private MemberService memberService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(memberService).passwordEncoder(new BCryptPasswordEncoder());
    }

    @Override // 재정의 [상속받은 클래스로부터 메소드 재구현]
    protected void configure(HttpSecurity http) throws Exception {
        // super.configure(http); // 모든 HTTP 보안설정
        http
                .formLogin()                                        // 로그인 페이지 보안 설정
                    .loginPage("/member/login")                     // 아이디와 비밀번호를 입력받을 URL [ 로그인 페이지  ]
                    .loginProcessingUrl("/member/getmember")        // 로그인을 처리할 URL [ 서비스 --> loadUserByUsername  ]
                    .defaultSuccessUrl("/")                         // 로그인 성공했을때 이동할 URL
                    .failureUrl("/member/login") // 로그인 실패시 이동할 URL
                    .usernameParameter("memail")                    // 아이디 변수명
                    .passwordParameter("mpassword")                 // 비밀번호 변수명
                .and()// 기능 구분
                    .logout()                                           // 로그아웃 보안 설정
                    .logoutRequestMatcher(new AntPathRequestMatcher("/member/logout")) // 로그아웃 처리 URL 정의
                    .logoutSuccessUrl("/")                          // 로그아웃 성공했을때 이동할 URL
                    .invalidateHttpSession(true)                  // 세션초기화  [ principal 초기화 ]
                .and()  // 기능 구분
                    .csrf() // 요청 위조 방지
                        .ignoringAntMatchers("/member/getmember") // 로그인 post 사용  // 해당 URL 요청 방지 해지
                        .ignoringAntMatchers("/member/setmember") // 회원가입 post 사용
                .and()
                    .oauth2Login() // 소셜 로그인 보안 설정
                    .userInfoEndpoint()// Endpoint (종착점) : 소셜 회원정보를 들어오는곳
                    .userService(memberService);// 해당 서비스  loadUser 메소드 구현
    }


}