import React, { useState } from "react";
import { getRecipe_Info } from "../services/UserServices";
import { useSelector } from "react-redux";
import ImageUploading from "react-images-uploading";

function UpdateRecipe() {
  const [recipeName, setRecipeName] = useState("");
  const [retrieveData, setRetrieveData] = useState({
    title: "",
    ingredients: [],
    instructions: [],
  });
  const userSession_Data = useSelector((state) => state.userSession);
  const [images, setImages] = React.useState([]);
  const maxNumber = 3;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
  };
  const onClickGetRecipeInfo = async () => {
    const getRecipe_Data = await getRecipe_Info(
      recipeName,
      userSession_Data.accessToken
    );

    if (getRecipe_Data.code === 60008) {
      console.log("service data:", getRecipe_Data.data);
      setRetrieveData(getRecipe_Data.data);
      var imageObject = {
        data_url: getRecipe_Data.data.image,
        file: {},
      };
      var imageArray = [];
      imageArray.push(imageObject);
      setImages(imageArray);
    } else {
      console.log("In Exception");
      setRetrieveData({
        title: "",
        ingredients: [],
        instructions: [],
      });
    }
  };
  return (
    <div className="p-3">
      <div className="flex justify-between p-2">
        <label htmlFor="recipeName" className="text-blue-900 font-sans text-xl">
          Recipe Name :
        </label>
        <input
          type="text"
          className=" border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light"
          value={recipeName}
          onChange={(e) => {
            setRecipeName(e.target.value);
          }}
        />
        <button
          className="bg-purple-500 text-white px-3 py-1 rounded"
          onClick={onClickGetRecipeInfo}
        >
          Search
        </button>
      </div>
      <div className=" p-3">
        <label
          htmlFor="ingredients"
          className="text-blue-900 font-sans text-xl"
        >
          Ingredients :
        </label>
        <div className="flex justify-between mt-2">
          <label
            htmlFor="ingredientName"
            className="text-blue-900 font-sans text-xl  w-28"
          >
            Name
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
          />
          <label
            htmlFor="ingredientQuantity"
            className="text-blue-900 font-sans text-xl w-28"
          >
            Quantity
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
          />
          <button className="bg-purple-500 text-white px-3 py-1 rounded">
            Add/Update
          </button>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className=" text-red-400 flex flex-col border-2 w-96">
          {retrieveData.ingredients.map((item, index) => {
            return (
              <div key={index} className="p-1 flex justify-around mx-3">
                <label htmlFor="" className="w-40">
                  {item.name}
                </label>
                <label htmlFor="">{item.amount}</label>
              </div>
            );
          })}
        </div>
      </div>
      <div className=" p-3">
        <label
          htmlFor="instructions"
          className="text-blue-900 font-sans text-xl w-28"
        >
          Instructions :
        </label>
        <div className="flex justify-between mt-2">
          <label
            htmlFor="stepNo"
            className="text-blue-900 font-sans text-xl w-28"
          >
            Step No.
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
          />
          <label
            htmlFor="description"
            className="text-blue-900 font-sans text-xl w-28 "
          >
            Description
          </label>
          <input
            type="text"
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
          />
          <button className="bg-purple-500 text-white px-3 py-1 rounded">
            Add/Update
          </button>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className=" text-red-400 flex flex-col border-2 w-96">
          {retrieveData.instructions.map((item, index) => {
            return (
              <div key={index} className="p-1 flex justify-around mx-3">
                <label htmlFor="" className="w-40">
                  {item.stepNo}{" "}
                </label>
                <label htmlFor="">{item.stepDesc} </label>
              </div>
            );
          })}
        </div>
      </div>
      <div className="p-3">
        <label
          htmlFor="refImage"
          className="text-blue-900 font-sans text-xl w-32"
        >
          Ref.Image :
        </label>
        <ImageUploading
          multiple
          value={images}
          onChange={onChange}
          maxNumber={maxNumber}
          dataURLKey="data_url"
        >
          {({
            imageList,
            onImageUpload,
            onImageRemoveAll,
            onImageUpdate,
            onImageRemove,
            isDragging,
            dragProps,
          }) => (
            // write your building UI
            <div className="upload__image-wrapper">
              <label
                htmlFor="plsUploadImg"
                className="text-blue-900 font-sans text-xl"
              >
                Please upload ref. image:
              </label>
              <button
                className="bg-green-600 text-white px-3 py-1 rounded ml-3 mb-3"
                style={isDragging ? { color: "red" } : undefined}
                onClick={onImageUpload}
                {...dragProps}
              >
                Upload Image
              </button>
              &nbsp;
              {imageList.map((image, index) => (
                <div key={index} className="flex items-center  justify-center">
                  <img
                    src={image.data_url}
                    alt=""
                    width="350"
                    className="px-5"
                  />
                  <button
                    className="bg-green-600 h-10 px-3 border-2 text-white"
                    onClick={() => onImageUpdate(index)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-600 h-10 px-3 border-2 text-white"
                    onClick={() => onImageRemove(index)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </ImageUploading>
      </div>
      <div className="mt-5 flex justify-center ">
        <button className="bg-purple-500 text-white px-10 py-1 rounded">
          Update Recipe
        </button>
      </div>
    </div>
  );
}

export default UpdateRecipe;
