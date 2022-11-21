package com.Ezenweb.domain.entity.bcategory;

import com.Ezenweb.domain.Dto.GcategoryDto;
import com.Ezenweb.domain.entity.board.gBoardEntity;
import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;


@Table(name = "guestcate")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Entity
public class GuestCatelEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int gcno;
    @Column(nullable = false)
    private String gtitle;

    @OneToMany(mappedBy = "guestCatelEntity")
    @Builder.Default
    private List<gBoardEntity> gBoardEntityList = new ArrayList<>();

    public GcategoryDto toDto() {
        return GcategoryDto.builder()
                .gcno(this.gcno)
                .gtitle(this.gtitle)
                .build();
    }
}
