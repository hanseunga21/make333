import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4 space-y-10">
      <div className="className=">
        <div className="space-y-4">
          <div className="text-2xl font-bold">New</div>
          <img
            src="https://images.unsplash.com/photo-1576495199011-eb94736d05d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2l0eSUyMGNhbXB1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
            alt=""
            className="w-full h-72 object-cover rounded-2xl"
          />
        </div>
      </div>

      <div>
        <div className="space-y-4">
          <div className="text-2xl font-bold">Category</div>

        <div className="flex space-x-3">
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1583224964978-2257b960c3d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8a29yZWFuJTIwZm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 doject-cover rounded-full"
            />
            <div className="text-center">한식</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1615361200141-f45040f367be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c3VzaGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 doject-cover rounded-full"
            />
            <div className="text-center">일식</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1563245372-f21724e3856d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hpbmElMjBmb29kfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 doject-cover rounded-full"
            />
            <div className="text-center">중식</div>
          </div>
          <div className="space-y-2">
            <img
              src="https://images.unsplash.com/photo-1613564834361-9436948817d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHBpenphfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              alt=""
              className="w-20 h-20 doject-cover rounded-full"
            />
            <div className="text-center">양식</div>
          </div>
          </div>
        </div>
      </div>

<div>
      <div className="text-2xl font-bold mb-4">List</div>
      
      <div className="border p-4 rounded-mb">
        <div>
          <img src="https://images.unsplash.com/photo-1603929832681-00d8f727063c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTR8fGtvcmVhbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60"
          alt=""
          className="w-full h-60 object-cover rounded-xl"
          />
          <div className="mt-4">
            <div className="text-lg font-semibold">Card title</div>
            <div className="text-gray-500">
              Welcome to Korea!
            </div>
          <div className="mt-4 justify-end flex space-x-3">
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">만들기</div>
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">공유하기</div>
          </div>
          </div>
        </div>
      </div>
      </div>
    
<div>

</div>
      <div className="text-2xl font-bold mb-4">Today's Special</div>

      <div className="flex space-x-3">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60" 
          alt=""
          className="w-20 h-50 object-cover rounded-xl"
          />
          <div className="mt-4">
            <div className="text-lg flex flex-row font-semibold">이화여대 맛집</div>
            <div className="text gray-500">
              배고픈 대학생들을 위한 가성비 맛집
            <div className="text-xs text-gray-400">
              #가성비 #이대정문 #비건
            </div>

          </div>
        </div>
      </div>

      <div className="flex space-x-3">
        <div>
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" 
          alt=""
          className="w-full h-30 object-cover rounded-xl"
          />
          <div className="mt-4">
            <div className="text-lg font-semibold">52번가 샐러드</div>
            <div className="text-sm text-gray-500"> 
            서울 서대문구 이화여대길 52-15
            <div className="text-sm text-gray-500">
            02-1234-5678
            <div className="text-sm text-gray-500">
              Mon-SAT 9:00 AM - 9:00 PM 
            </div>
            <div className="m-4">
            <div className="bg-gray-800 rounded-md text-white text-center py-2.5 px-4">네이버 지도로 길찾기</div>
            </div>
            </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};
