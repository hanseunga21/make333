import React from 'react';

export const HomePage = () => {
  return (
    <div className="m-4 space-y-10">
      <div className="m-4">
        <div className="space-y-4">
          <div className="text-2xl font-bold">New</div>
          <img
            src="https://images.unsplash.com/photo-1649101075731-923d9b4870ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
            alt=""
            className="w-full h-72 object-cover"
          />
        </div>
      </div>

      <div>
        <div>
          <div className="text-2xl font-bold">Category</div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1649168813823-0b40fea4045c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
              alt=""
              className="w-20 h-20 doject-cover rounded-full"
            />
            <div>일식1</div>
          </div>
        </div>
      </div>

      <div className="text-2xl font-bold mb-4">List</div>

      <div className="border p-4">
        <div className="bg-gray-800 text-white text-center py4">만들기</div>
        <div className="text-center py-4 text-gray-800 border border-gray-800">
          공유하기
        </div>
      </div>
    </div>
  );
};
