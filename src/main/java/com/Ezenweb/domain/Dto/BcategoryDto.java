package com.Ezenweb.domain.Dto;

import com.Ezenweb.domain.entity.bcategory.BcategoryEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class BcategoryDto {
    private int bcno;//카테고리번호
    private String bcname; //카테고리이름

    public BcategoryEntity toEntity() {
        return BcategoryEntity.builder()
                .bcno(this.bcno)
                .bcname(this.bcname)
                .build();
        //this : 해당 메소드를 호출하는 객체의 필드 호출시 사용되는 키
    }
}
