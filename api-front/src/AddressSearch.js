import { useState } from 'react';

const AddressSearch = () => {
  const [address, setAddress] = useState('');

  //주소검색을 완료하고 사용자가 검색한 데이터를 가져와서 기능 실행하기
  const handleComplete = (data) => {
    // 사용자가 선택한 기본 주소를 fullAddress 주소에 저장
    let fullAddress = data.address; // 서울 강남구 강남대로 298 (역삼동, KB라이프타워)
    let extraAddress = ''; // 남도빌딩을 선택했을 때 층 몇호

    // R = Road 도로명주소 J Jibeon = 지번주소
    if (data.addressType === 'R') {//주소 타입이 도로명 주소 일 경우
      
      //bname = 특정 동이 존재하면 추가   역삼동
      if (data.bname !== '') {
        extraAddress += data.bname;
      }

      //특정 빌딩이름이 존재하면 추가     남도빌딩
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      // fullAddress 모든 주소 합쳐서 정리하기
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    //완성된 주소
    setAddress(fullAddress);
  };
  
  // 주소검색 버튼을 누를경우 openPostcode 기능실행
  const openPostcode = () => {
    //new window.daum  new = 새 window = 창에서 daum = 서비스를 실행
    new window.daum.Postcode({
       // oncomplete : 사용자가 주소 검색을 완료했을 때 호출하는 함수 지정
       // 호출하는 함수 = 주소 검색을 완료하고나서 실행할 기능 선택
       //  oncomplete = 다음에서 제공 handleComplete = 개발자가 만든 기능
      oncomplete: handleComplete,
    }).open(); //실행하기
  };

  return (
    <div>
      <button onClick={openPostcode}>주소 검색</button>
      {address && <div>선택한 주소: {address}</div>}
    </div>
  );
};

export default AddressSearch;