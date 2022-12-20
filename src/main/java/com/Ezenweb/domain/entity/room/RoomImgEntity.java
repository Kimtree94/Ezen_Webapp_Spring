package com.Ezenweb.domain.entity.room;


import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "roomimg")
@Builder
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class RoomImgEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int rimgno;
    private String rimg;

    @ManyToOne
    @JoinColumn(name = "rno")
    @ToString.Exclude
    private RoomEntity roomEntity;
}
