package com.Ezenweb.domain.entity.board;

import com.Ezenweb.domain.Dto.gBoardDto;
import com.Ezenweb.domain.entity.bcategory.GuestCatelEntity;
import lombok.*;

import javax.persistence.*;


@Table(name = "gboard")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Builder
@Entity
public class gBoardEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gbno;
    @Column(nullable = false)
    private String gtitle;
    @Column(nullable = false, columnDefinition = "text")
    private String gcontent;
    @Column(nullable = false)
    private String gid;
    @Column
    private String gfile;
    @ManyToOne
    @JoinColumn(name = "gcno")
    @ToString.Exclude
    private GuestCatelEntity guestCatelEntity;


    public gBoardDto toDto() {
        return gBoardDto.builder()
                .gbno(this.gbno)
                .gtitle(this.gtitle)
                .gcontent(this.gcontent)
                .gid(this.gid)
                .filename(this.gfile)
                .build();
    }
}

