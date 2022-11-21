package com.Ezenweb.domain.Dto;

import com.Ezenweb.domain.entity.bcategory.GuestCatelEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class GcategoryDto {
    private int gcno;
    private String gtitle;


    public GuestCatelEntity toEntity() {
        return GuestCatelEntity.builder()
                .gcno(this.gcno)
                .gtitle(this.gtitle)
                .build();

    }
}
