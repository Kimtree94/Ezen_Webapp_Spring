package com.Ezenweb.service;

import com.Ezenweb.domain.Dto.GcategoryDto;
import com.Ezenweb.domain.Dto.gBoardDto;
import com.Ezenweb.domain.entity.bcategory.GuestCatelEntity;
import com.Ezenweb.domain.entity.bcategory.GuestcateRepository;
import com.Ezenweb.domain.entity.board.gBoardEntity;
import com.Ezenweb.domain.entity.board.gBoardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class GuestbookService {
    @Autowired
    public GuestcateRepository guestcateRepository;
    @Autowired
    public gBoardRepository gboardRepository;

    @Transactional
    public boolean guestcate(GcategoryDto gcategoryDto) {
        GuestCatelEntity gbe = guestcateRepository.save(gcategoryDto.toEntity());
        if (gbe.getGcno() != 0) {
            return true;
        } else {
            return false;
        }
    }

    @Transactional
    public List<GcategoryDto> guestcatelist() {
        List<GuestCatelEntity> entityList = guestcateRepository.findAll();
        List<GcategoryDto> dtoList = new ArrayList<>();
        entityList.forEach(g -> dtoList.add(g.toDto()));
        return dtoList;
    }

    @Transactional
    public boolean setgboard(gBoardDto gboardDto) {
        Optional<GuestCatelEntity> optional = guestcateRepository.findById(gboardDto.getGcno());
        if (!optional.isPresent()) {
            return false;
        }
        GuestCatelEntity guestCatelEntity = optional.get();
        gBoardEntity gBoardEntity = gboardRepository.save(gboardDto.toEntity());
        if (gBoardEntity.getGbno() != 0) {
            gBoardEntity.setGuestCatelEntity(guestCatelEntity);
            guestCatelEntity.getGBoardEntityList().add(gBoardEntity);
            return true;
        } else {
            return false;
        }
    }
}