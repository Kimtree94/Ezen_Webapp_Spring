package com.Ezenweb.domain.Dto;


import com.Ezenweb.domain.entity.MemberEntity;
import lombok.*;

@NoArgsConstructor@AllArgsConstructor
@Getter@Setter@ToString@Builder
public class MemberDto {
    private int mno;
    private String memail;
    private String mpassword;

    //*dto--->entity 변환
    public MemberEntity toEntity(){
        return MemberEntity.builder()
                .mno(this.mno)
                .memail(this.memail)
                .mpassword(this.mpassword)
                .build();
    }
}
