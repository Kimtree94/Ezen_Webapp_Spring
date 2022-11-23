package com.Ezenweb.domain.Dto;

import com.Ezenweb.domain.entity.board.gBoardEntity;
import lombok.*;
import org.springframework.web.multipart.MultipartFile;

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
    private String filename;
    private MultipartFile gfile;

    public gBoardEntity toEntity() {
        return gBoardEntity.builder()
                .gbno(this.gbno)
                .gtitle(this.gtitle)
                .gcontent(this.gcontent)
                .gid(this.gid)
                .build();
    }
}
