package com.Ezenweb.domain.Dto;

import com.Ezenweb.domain.entity.board.gBoardEntity;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
public class gBoardDto {
    private int gbno;
    private String gtitle;
    private String gcontent;
    private String gid;
    private int gcno;

    public gBoardEntity toEntity() {
        return gBoardEntity.builder()
                .gbno(this.gbno)
                .gtitle(this.gtitle)
                .gcontent(this.gcontent)
                .gid(this.gid)
                .build();
    }
}
