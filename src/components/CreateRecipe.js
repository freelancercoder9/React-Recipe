import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIngName_Quatity, getStepNo_desc, getRecipeName } from "../actions";
import ImageUploading from "react-images-uploading";
import { createRecipe_Service } from "../services/UserServices";

function CreateRecipe() {
  const dispatch = useDispatch();
  const create_Data = useSelector((state) => state.createRecipe);
  const userSession_Data = useSelector((state) => state.userSession);
  const [ingredientName, setIngredientName] = useState("");
  const [ingredientQty, setIngredientQty] = useState("");
  const [stepNum, setStepNum] = useState("");
  const [stepDesc, setStepDesc] = useState("");
  const [errorList, setErrorList] = useState({
    isRecipeName: true,
    recipeNameErrorMsg: "",
    isIngredient: true,
    ingredientErrorMsg: "",
    isInstruction: true,
    instructionErrorMsg: "",
    isUploadImg: true,
    uploadImgerrorMsg: "",
    isImageName: true,
    ImageErrorMsg: "",
  });
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };
  const onClickCreateRecipe = () => {
    console.log("in create", images);
    var create_DataNew = {
      ...create_Data,
      image: images[0].data_url.split(",")[1],
      userName: userSession_Data.userName,
      email: userSession_Data.email,
    };

    createRecipe_Service(create_DataNew, userSession_Data.accessToken);

    // if (
    //   errorList.isRecipeName === false &&
    //   errorList.isIngredient === false &&
    //   errorList.isInstruction === false &&
    //   errorList.isImageName === false
    // ) {
    //   console.log("service call");
    // } else {
    //   console.log("error msg");
    // }
  };

  return (
    <div className="p-3">
      <div className="flex justify-between p-3">
        <label htmlFor="recipeName" className="text-blue-900 font-sans text-xl">
          Recipe Name :
        </label>
        <input
          type="text"
          className="border-2 border-gray-200 w-8/12 h-7 px-2 text-xl font-light"
          onChange={(e) => {
            if (e.target.value.length > 0) {
              setErrorList({
                ...errorList,
                isRecipeName: false,
                recipeNameErrorMsg: "",
              });
              dispatch(getRecipeName(e.target.value));
            } else {
              setErrorList({
                ...errorList,
                isRecipeName: true,
                recipeNameErrorMsg: "please enter Recipe Name",
              });
            }
          }}
        />
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
            value={ingredientName}
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setIngredientName(e.target.value);
            }}
          />
          <label
            htmlFor="ingredientQuantity"
            className="text-blue-900 font-sans text-xl w-28"
          >
            Quantity
          </label>
          <input
            type="text"
            value={ingredientQty}
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setIngredientQty(e.target.value);
            }}
          />
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => {
              console.log(ingredientName, "  00 ", ingredientQty);
              var obj = {
                ing_Name: ingredientName,
                ing_Qty: ingredientQty,
              };
              dispatch(getIngName_Quatity(obj));
              setIngredientName("");
              setIngredientQty("");
            }}
          >
            Add/Update
          </button>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className=" text-red-400 flex flex-col border-2 w-96">
          {create_Data.ingredients.map((item, index) => {
            return (
              <div key={index} className="p-1 flex  mx-3">
                <label htmlFor="" className="w-40">
                  {item.ing_Name}
                </label>
                <label htmlFor="">{item.ing_Qty}</label>
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
            value={stepNum}
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setStepNum(e.target.value);
            }}
          />
          <label
            htmlFor="description"
            className="text-blue-900 font-sans text-xl w-28 "
          >
            Description
          </label>
          <input
            type="text"
            value={stepDesc}
            className=" border-2 border-gray-200 w-3/12 h-7 px-2 text-xl font-light ml-2"
            onChange={(e) => {
              setStepDesc(e.target.value);
            }}
          />
          <button
            className="bg-green-500 text-white px-3 py-1 rounded"
            onClick={() => {
              var obj1 = {
                inst_stepNum: stepNum,
                inst_stepDesc: stepDesc,
              };
              dispatch(getStepNo_desc(obj1));
              setStepNum("");
              setStepDesc("");
            }}
          >
            Add/Update
          </button>
        </div>
      </div>
      <div className="flex justify-center my-2">
        <div className=" text-red-400 flex flex-col border-2 w-96">
          {create_Data.instructions.map((item, index) => {
            return (
              <div key={index} className="p-1 flex  mx-3">
                <label htmlFor="" className="w-40">
                  {item.inst_stepNum}{" "}
                </label>
                <label htmlFor="">{item.inst_stepDesc} </label>
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
        <button
          className="bg-green-600 text-white px-10 py-1 rounded"
          onClick={onClickCreateRecipe}
        >
          Create Recipe
        </button>
      </div>
    </div>
  );
}

export default CreateRecipe;
