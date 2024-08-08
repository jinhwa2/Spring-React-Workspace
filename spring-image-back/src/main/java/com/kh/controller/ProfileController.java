package com.kh.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.kh.dto.UserProfile;
import com.kh.service.ProfileService;
import com.kh.service.ProfileServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/profile")
public class ProfileController {
	@Autowired
	private ProfileService service;
	//private ProfileServiceImpl profileServiceImpl;
	
	/*
	 @Autowired 를 안쓰면  아래와 같이 쓴다
	public ProfileController(ProfileService profileService) {
		this.profileService = profileService;
	}
    /**
     * 
     * parameter Type error
     * @RequestParam 안에 React에서 값을 가져올 때 값을 가져온 변수명을 작성하지 않으면 에러 발생
     * @RequestParam("React에서 가져올 변수명")
     */
	
	@GetMapping("/watching")
	public ResponseEntity<List<UserProfile>> getProfile(){
		return ResponseEntity.ok(service.getProfile());
	}
	
	@PostMapping("/upload")
	public ResponseEntity<String> insertProfile(@RequestParam("files") MultipartFile[] files,
			                                    @RequestParam("username") String username,
			                                    @RequestParam("profileImageUrl") String profileImageUrl  ){
			service.uploadProfile(files,username,profileImageUrl);
			return ResponseEntity.ok("이미지업로드성공");
	}
	
}
