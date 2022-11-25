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

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class GuestbookService {
    String gpath = "C:\\Users\\504\\IdeaProjects\\Ezen_Webapp_Spring\\src\\main\\resources\\static\\gbupload\\";
    @Autowired
    private GuestcateRepository guestcateRepository;
    @Autowired
    private gBoardRepository gboardRepository;
    @Autowired
    private HttpServletRequest request;
    @Autowired
    private HttpServletResponse response;

    ///////////////////////////////////////////////////////////////////////////
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

            String uuid = UUID.randomUUID().toString();
            String gfilename = uuid + "_" + gboardDto.getGfile().getOriginalFilename();

            gBoardEntity.setGfile(gfilename);

            try {
                File upload = new File(gpath + gfilename);
                gboardDto.getGfile().transferTo(upload);
            } catch (Exception e) {
                System.out.println(e);
            }
            gBoardEntity.setGuestCatelEntity(guestCatelEntity);
            guestCatelEntity.getGBoardEntityList().add(gBoardEntity);
            return true;
        } else {
            return false;
        }
    }

    @Transactional
    public List<gBoardDto> showgboard(int gcno) {
        List<gBoardEntity> glist = null;
        if (gcno == 0) {
            glist = gboardRepository.findAll();
        } else {
            GuestCatelEntity guestCatelEntity = guestcateRepository.findById(gcno).get();
            glist = guestCatelEntity.getGBoardEntityList();
        }
        List<gBoardDto> gdlist = new ArrayList<>();
        for (gBoardEntity entity : glist) {
            gdlist.add(entity.toDto());
        }
        return gdlist;
    }

    @Transactional
    public gBoardDto showdetail(int gbno) {
        Optional<gBoardEntity> optional = gboardRepository.findById(gbno);

        if (optional.isPresent()) {
            gBoardEntity gboardEntity = optional.get();
            return gboardEntity.toDto();
        } else {
            return null;
        }
    }

    @Transactional
    public boolean gcorrection(gBoardDto gboarDto) {
        System.out.println("서비스;;;" + gboarDto);
        Optional<gBoardEntity> optional = gboardRepository.findById(gboarDto.getGbno());
        if (optional.isPresent()) {
            gBoardEntity entity = optional.get();

            entity.setGtitle(gboarDto.getGtitle());
            entity.setGcontent(gboarDto.getGcontent());
            return true;
        } else {
            return false;
        }
    }

}