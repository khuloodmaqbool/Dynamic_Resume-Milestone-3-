"use client";
import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { FaPlus } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { TiLocation } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import Image from "next/image";
import { RiProjectorFill } from "react-icons/ri";
import React from "react";

const DynamicResume = (): JSX.Element => {
  const [display, setDisplay] = useState<boolean>(true);

  const [imgLink, setImgLink] = useState<string>("");
  const [skillInp, setSkillInp] = useState<string>("");
  const [skillData, setSkillData] = useState<string[]>([]);
  const [showSkills, setShowSkills] = useState<boolean>(false);
  interface experienceInpType {
    roleInp: string;
    instituteInp: string;
    startYearInp: string;
    endYearInp: string;
    descriptionInp: string;
  }
  interface projectsInpType {
    titleInp: string;
    technologiesInp: string;
    featuresInp: string;
  }

  const [experienceInp, setExperienceInp] = useState<experienceInpType>({
    roleInp: "",
    instituteInp: "",
    startYearInp: "",
    endYearInp: "",
    descriptionInp: "",
  });
  const [experienceData, setExperienceData] = useState<experienceInpType[]>([]);

  const [projectsInp, setProjectsInp] = useState<projectsInpType>({
    titleInp: "",
    technologiesInp: "",
    featuresInp: "",
  });
  const [projectsData, setProjectsData] = useState<projectsInpType[]>([]);

  const handleInp2 = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setExperienceInp((prev) => ({ ...prev, [name]: value }));
  };

  const handleInp3 = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setProjectsInp((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (
      !experienceInp.roleInp ||
      !experienceInp.instituteInp ||
      !experienceInp.startYearInp ||
      !experienceInp.endYearInp ||
      !experienceInp.descriptionInp
    ) {
      alert("Fill All Fields");
      return;
    }

    setExperienceData((prev) => [...prev, experienceInp]);
    setExperienceInp({
      roleInp: "",
      instituteInp: "",
      startYearInp: "",
      endYearInp: "",
      descriptionInp: "",
    });
  };

  const handleProjectSubmit = () => {
    if (
      !projectsInp.titleInp ||
      !projectsInp.technologiesInp ||
      !projectsInp.featuresInp
    ) {
      alert("Fill All Fields");
      return;
    }
    setProjectsData((prev) => [...prev, projectsInp]);
    setProjectsInp({
      titleInp: "",
      technologiesInp: "",
      featuresInp: "",
    });
  };

  const handleProjectsDelete = (val:projectsInpType ) => {
    const filteredData = projectsData.filter((crnt) => crnt !== val);
    setProjectsData(filteredData);
  };

  interface InpType {
    nameInp: string;
    professionInp: string;
    aboutInp: string;
    languageInp: string;
    matricInp: string;
    interInp: string;
    courseInp: string;
    diplomaInp: string;
    phoneInp: string;
    emailInp: string;
    addressInp: string;
    linkedInInp: string;
    portfolioInp: string;
    experienceInp: string;
    projectsInp: string;
  }

  const [data, setData] = useState<InpType>({
    nameInp: "",
    professionInp: "",
    aboutInp: "",
    languageInp: "",
    matricInp: "",
    interInp: "",
    courseInp: "",
    diplomaInp: "",
    phoneInp: "",
    emailInp: "",
    addressInp: "",
    linkedInInp: "",
    portfolioInp: "",
    experienceInp: "",
    projectsInp: "",
  });

  const [inpVal, setInpVal] = useState<InpType>({
    nameInp: "",
    professionInp: "",
    aboutInp: "",
    languageInp: "",
    matricInp: "",
    interInp: "",
    courseInp: "",
    diplomaInp: "",
    phoneInp: "",
    emailInp: "",
    addressInp: "",
    linkedInInp: "",
    portfolioInp: "",
    experienceInp: "",
    projectsInp: "",
  });

  const handleInp = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    const { name, value } = e.target;
    setInpVal((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitBtn = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setData(inpVal);
    setShowSkills(true);
    setDisplay(false);
  };

  const handleFileInp = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target) {
          setImgLink(e.target.result as string);
        }
      };
      fileReader.readAsDataURL(file);
    }
  };

  const handleSkillBtn = (): void => {
    if (skillData.includes(skillInp)) {
      alert("Already Exist");
      setSkillInp("");
      return;
    }
    if (skillInp === "") {
      alert("Type Something");
      return;
    }
    setSkillData((prev) => [...prev, skillInp]);
    setSkillInp("");
  };

  const handleSkillDeleteBtn = (crnt: string) => {
    setSkillData(skillData.filter((val) => val !== crnt));
  };

  const handleExperienceDelete = (val:experienceInpType) => {
    const filteredData = experienceData.filter((crnt) => crnt !== val);
    setExperienceData(filteredData);
  };



  const primaryBtn = `bg-gradient-to-r from-blue_col via-purple_col to-pink_col px-4 py-3 rounded-lg text-white`;
  const inpClasses = `border-b-2 border-black px-3 py-4 my-3 focus:outline-none rounded w-full text-sm desktop:text-base`;
  const subHeadingClass = `text-left text-xl desktop:text-2xl my-3`;
  return (
    <>
      <div className="flex justify-center items-center">
        <Image
          src="/magic brush.png"
          alt="Magic brush image"
          className="desktop:w-10 w-8"
          width={500}
          height={500}
        />

        <h1
          style={{ fontFamily: "DM Sans" }}
          className="text-black border-0 text-4xl md:text-6xl font-bold my-8 ps-2"
        >
          GENERATE
          <span
            style={{ fontFamily: "Dancing Script" }}
            className="font-bold text-purple_col"
          >
            RESUME
          </span>
        </h1>
      </div>
      <form onSubmit={handleSubmitBtn}>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-9 justify-center  mx-3 tablet:mx-16 desktop:mx-16     ">
          {/* LEFT------------------- */}
          <div className="left-div">
            <h2 className={`${subHeadingClass}`}>Personal Information</h2>
            <input
              className={` py-4 my-3 w-full`}
              required
              type="file"
              onChange={handleFileInp}
            />
            <input
              className={`${inpClasses}`}
              required
              placeholder="Enter your Name"
              type="text"
              name="nameInp"
              value={inpVal.nameInp}
              onChange={handleInp}
            />
            <textarea
              className={`${inpClasses}`}
              required
              placeholder="Write a brief summary about yourself"
              name="aboutInp"
              value={inpVal.aboutInp}
              onChange={handleInp}
            ></textarea>
            <input
              className={`${inpClasses}`}
              required
              placeholder="Enter your Profession"
              type="text"
              name="professionInp"
              value={inpVal.professionInp}
              onChange={handleInp}
            />

            <h2 className={`${subHeadingClass}`}>EDUCATION</h2>
            <input
              className={`${inpClasses}`}
              placeholder="Where did you complete matriculation?"
              type="text"
              name="matricInp"
              value={inpVal.matricInp}
              onChange={handleInp}
            />
            <input
              className={`${inpClasses}`}
              placeholder="Where did you complete intermediate? (optional)"
              type="text"
              name="interInp"
              value={inpVal.interInp}
              onChange={handleInp}
            />
            <input
              className={`${inpClasses}`}
              placeholder="Courses you've done (optional)"
              type="text"
              name="courseInp"
              value={inpVal.courseInp}
              onChange={handleInp}
            />
            <input
              className={`${inpClasses}`}
              placeholder="Diploma Courses you've done (optional)"
              type="text"
              name="diplomaInp"
              value={inpVal.diplomaInp}
              onChange={handleInp}
            />

            <h2 className={`${subHeadingClass}`}>CONTACT</h2>
            <input
              className={`${inpClasses}`}
              required
              placeholder="Enter your Phone Number"
              type="number"
              name="phoneInp"
              value={inpVal.phoneInp}
              onChange={handleInp}
            />
            <input
              className={`${inpClasses}`}
              required
              placeholder="Enter your Email"
              type="text"
              name="emailInp"
              value={inpVal.emailInp}
              onChange={handleInp}
            />
            <textarea
              className={`${inpClasses}`}
              required
              placeholder="Enter your Address"
              name="addressInp"
              value={inpVal.addressInp}
              onChange={handleInp}
            ></textarea>
            <input
              className={`${inpClasses}`}
              required
              placeholder="Enter your LinkedIn Profile Link"
              type="text"
              name="linkedInInp"
              value={inpVal.linkedInInp}
              onChange={handleInp}
            />
            <input
              className={`${inpClasses}`}
              placeholder="Enter your Portfolio Link (optional)"
              type="text"
              name="portfolioInp"
              value={inpVal.portfolioInp}
              onChange={handleInp}
            />
          </div>
          {/* RIGHT ------------------------ */}
          <div className="right-div">
            <h2 className={`${subHeadingClass}`}>SKILLS</h2>
            <div className="flex">
              <input
                className={`${inpClasses} rounded-l-lg`}
                placeholder="Enter your Skills"
                type="text"
                value={skillInp}
                onChange={(event) => setSkillInp(event.target.value)}
              />
              <button
                className="bg-primary-color text-white my-3 rounded-r-lg"
                type="button"
                onClick={handleSkillBtn}
              >
                <FaPlus className="mx-4" />
              </button>
            </div>
            <div className=" flex justify-center items-center flex-wrap">
              {skillData.map((crnt) => (
                <div
                  key={crnt}
                  className={` rounded-3xl bg-primary-color px-3 py-2 m-3 w-fit text-white`}
                >
                  <span>{crnt}</span>
                  <button
                    className={`border-0 ps-2`}
                    onClick={() => handleSkillDeleteBtn(crnt)}
                  >
                    <RxCross1 style={{ color: "white" }} />
                  </button>
                </div>
              ))}
            </div>
            <h2 className={`${subHeadingClass}`}>Experience (Optional)</h2>
            <input
              type="text"
              className={`${inpClasses}`}
              placeholder="Enter your Role"
              value={experienceInp.roleInp}
              name="roleInp"
              onChange={handleInp2}
            />
            <br />
            <input
              className={`${inpClasses}`}
              type="text"
              placeholder="Institute name"
              value={experienceInp.instituteInp}
              name="instituteInp"
              onChange={handleInp2}
            />
            <br />
            <input
              className={`${inpClasses}`}
              placeholder="Start date"
              type="string"
              id="startYear"
              value={experienceInp.startYearInp}
              name="startYearInp"
              onChange={handleInp2}
            />
            <br />
            <input
              className={`${inpClasses}`}
              placeholder="End date"
              type="string"
              id="endYear"
              value={experienceInp.endYearInp}
              name="endYearInp"
              onChange={handleInp2}
            />
            <br />
            <input
              className={`${inpClasses}`}
              type="text"
              placeholder="Enter Description"
              value={experienceInp.descriptionInp}
              name="descriptionInp"
              onChange={handleInp2}
            />
            <br />
            <div className="flex justify-end">
              <button
                className="bg-primary-color text-white my-3 rounded-lg px-5 py-2 "
                onClick={handleSubmit}
                type="submit"
              >
                Add
              </button>
            </div>
            <div>
              {experienceData.map((exp, index) => (
                <>
                  <div key={index} className="flex justify-between my-3">
                    <div>
                      <h4 className="text-1xl">
                        {exp.startYearInp} - {exp.endYearInp}
                      </h4>
                      <h5 className="text-lg font-semibold">
                        {exp.instituteInp}
                      </h5>
                      <h4 className="font-semibold">{exp.roleInp}</h4>
                      <p className="">{exp.descriptionInp}</p>

                      <hr />
                    </div>
                    <button
                      className=" rounded-lg px-3 py-2 h-fit"
                      onClick={() => handleExperienceDelete(exp)}
                    >
                      <RxCross2 />
                    </button>
                  </div>
                </>
              ))}
            </div>
            <h2 className={`${subHeadingClass}`}>Projects (Optional)</h2>
            <input
              className={`${inpClasses}`}
              type="text"
              placeholder="Project Title"
              value={projectsInp.titleInp}
              name="titleInp"
              onChange={handleInp3}
            />
            <br />
            <input
              className={`${inpClasses}`}
              placeholder="Technologies Used   (ex: HTML, Tailwind CSS, NextJs )"
              type="string"
              id="startYear"
              value={projectsInp.technologiesInp}
              name="technologiesInp"
              onChange={handleInp3}
            />
            <br />
            <input
              className={`${inpClasses}`}
              placeholder="Features"
              type="string"
              id="endYear"
              value={projectsInp.featuresInp}
              name="featuresInp"
              onChange={handleInp3}
            />
            <br />
            <div className="flex justify-end">
              <button
                className="bg-primary-color text-white my-3 rounded-lg px-5 py-2 "
                onClick={handleProjectSubmit}
                type="submit"
              >
                Add
              </button>
            </div>

            {/* <div> */}
            {projectsData.map((crnt, index) => (
              <>
                <div key={index} className="flex justify-between my-3">
                  <div key={index}>
                    <h5 className="text-lg font-bold">{crnt.titleInp}</h5>
                    <h4 className="font-semibold">{crnt.technologiesInp}</h4>
                    <p className="">{crnt.featuresInp}</p>

                    <hr />
                  </div>
                  <button
                    className="rounded-lg px-3 py-2 h-fit"
                    onClick={() => handleProjectsDelete(crnt)}
                  >
                    <RxCross2 />
                  </button>
                </div>
              </>
            ))}
            {/* </div> */}
            <h2 className={`${subHeadingClass}`}>Languages</h2>
            <input
              className={`${inpClasses}`}
              required
              placeholder="Enter your Languages"
              type="text"
              name="languageInp"
              value={inpVal.languageInp}
              onChange={handleInp}
            />

            {/* BUTTONS ------------------------------  */}
            <div className="flex justify-end mt-5">
              <button type="submit" className={`${primaryBtn}`}>
                Generate Resume
              </button>
            </div>
          </div>
        </div>
      </form>

      {!display && (
        <>
          <div
            id="content"
            className="resumediv mt-8 flex flex-col-reverse  lg:flex-row flex-wrap md:flex-row flex-wrap  justify-center rounded-lg border-2 mx-auto w-full max-w-lg md:max-w-4xl lg:max-w-5xl bg-white"
          >
            <div className="left bg-black text-white p-4 sm:p-6 lg:p-8 rounded-lg lg:rounded-l-lg w-full lg:w-1/3 md:w-1/3 lg:p-8">
            <div className="flex justify-center items-center lg:mb-12 md:mx-auto md:my-3 ">
                {imgLink ? (
                  <Image
                    className="w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 rounded-full object-cover border-2 border-slate-100 bg-slate-100 object-cover  hidden md:block lg:block"
                    src={imgLink}
                    alt="profile"
                    width={500}
                    height={300}
                    priority
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-center">
                    Select your Image
                  </p>
                )}
              </div>
              <h2 className="text-lg sm:text-xl rounded-full font-semibold text-white mb-4">
                About Me
              </h2>
              <p className="text-xs sm:text-sm mb-6">{data.aboutInp}</p>
              <h2 className="text-lg sm:text-xl  font-semibold text-white mb-4">
                Contact
              </h2>
              <div className="flex flex-col items-start w-full space-y-4">
                <div className="flex items-center w-full">
                  <div className="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-purple-700">
                    <MdLocalPhone />
                  </div>
                  <p className="text-xs sm:text-sm ml-2 flex-1 break-words">
                    {data.phoneInp}
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-purple-700">
                    <SiGmail />
                  </div>
                  <p className="text-xs sm:text-sm ml-2 flex-1 break-words">
                    {data.emailInp}
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-purple-700">
                    <TiLocation />
                  </div>
                  <p className="text-xs sm:text-sm ml-2 flex-1 break-words">
                    {data.addressInp}
                  </p>
                </div>
                <div className="flex items-center w-full">
                  <div className="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-purple-700">
                    <FaLinkedinIn />
                  </div>
                  <p className="text-xs sm:text-sm ml-2 flex-1 break-words">
                    <a
                      className="underline text-blue-400"
                      href={data.linkedInInp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {data.linkedInInp}
                    </a>
                  </p>
                </div>
                {data.portfolioInp && (
                  <div className="flex items-center w-full">
                    <div className="w-10 h-10 flex justify-center items-center p-2 rounded-full bg-purple-700">
                      <RiProjectorFill />
                    </div>
                    <p className="text-xs sm:text-sm ml-2 flex-1 break-words">
                      <a
                        className="underline text-blue-400"
                        href={data.portfolioInp}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {data.portfolioInp}
                      </a>
                    </p>
                  </div>
                )}
              </div>
              <h2 className="text-lg sm:text-xl mt-6 font-bold text-white  mb-4">
                Language
              </h2>
              <p className="text-xs sm:text-sm">{data.languageInp}</p>
              <h2 className="text-lg sm:text-xl mt-6 mb-4 font-semibold text-white ">
                Skills
              </h2>
              <ul className="list-disc ml-4 space-y-2">
                {showSkills &&
                  skillData.map((skills, ind) => (
                    <li key={ind} className="text-xs sm:text-sm font-semibold">
                      {skills}
                    </li>
                  ))}
              </ul>
            </div>

            <div className="right p-4 sm:p-6 lg:p-8 w-full lg:w-2/3 md:w-2/3 md:p-6">
            <div className="flex justify-center items-center  mb-8 lg:mb-12  md:mx-auto md:my-3 my-6">
                {imgLink ? (
                  <Image
                    className="w-20 h-20 md:w-28 md:h-28 lg:w-48 lg:h-48 rounded-full object-cover border-2 border-slate-100 bg-slate-100 block md:hidden lg:hidden"
                    src={imgLink}
                    alt="profile"
                    width={500}
                    height={300}
                    priority
                  />
                ) : (
                  <p className="text-xs sm:text-sm text-center">
                    Select your Image
                  </p>
                )}
                <div>
                  <h2 className="text-center text-xl sm:text-2xl md:text-5xl lg:text-6xl font-bold">
                    {data.nameInp}
                  </h2>
                  <h2
                    className={`text-center text-purple_col text-lg sm:text-xl md:text-3xl lg:text-5xl font-bold mt-2 mb-6`}
                    style={{
                      fontFamily: "Dancing Script",
                     
                    }}
                  >
                    {data.professionInp}
                  </h2>
                </div>
              </div>

              <h2 className="text-lg sm:text-xl  font-bold text-purple_col mb-4">
                Education
              </h2>
              <ul className="space-y-2">
                {data.diplomaInp && (
                  <>
                    <li className="text-base font-semibold font-bold">
                      Diploma
                    </li>
                    <p className="text-xs sm:text-sm ">{data.diplomaInp}</p>
                  </>
                )}
                {data.courseInp && (
                  <>
                    <li className="text-base font-semibold font-bold">
                      Courses
                    </li>
                    <p className="text-xs sm:text-sm ">{data.courseInp}</p>
                  </>
                )}
                {data.interInp && (
                  <>
                    <li className="text-base font-semibold font-bold">
                      Intermediate
                    </li>
                    <p className="text-xs sm:text-sm ">{data.interInp}</p>
                  </>
                )}
                <li className="text-sm font-semibold">Matriculation</li>
                <p className="text-xs sm:text-sm">{data.matricInp}</p>
              </ul>
              {experienceData && experienceData.length > 0 && (
                <div>
                  <h2 className="text-lg sm:text-xl  font-bold text-purple_col mt-6 mb-4">
                    Experience
                  </h2>
                  {experienceData.map((exp, index) => (
                    <div key={index} className="mb-4">
                      <h4 className="text-xs sm:text-sm font-bold">
                        {exp.startYearInp} - {exp.endYearInp}
                      </h4>
                      <h5 className="text-sm sm:text-base md:text-xl font-semibold">
                        {exp.instituteInp}
                      </h5>
                      <h4 className="text-xs sm:text-sm font-bold">
                        {exp.roleInp}
                      </h4>
                      <p className="text-xs sm:text-sm">{exp.descriptionInp}</p>
                      <hr className="my-2" />
                    </div>
                  ))}
                </div>
              )}
              {projectsData && projectsData.length > 0 && (
                <div>
                  <h2 className="text-lg sm:text-xl  font-bold text-purple_col mt-6 mb-4">
                    My Projects
                  </h2>
                  {projectsData.map((crnt, index) => (
                    <div key={index} className="mb-4">
                      <h5 className="mb-1 text-base sm:text-base md:text-xl font-bold">
                        {crnt.titleInp}
                      </h5>
                      <p className="text-xs sm:text-sm">
                        <span className="font-bold">Technologies Used: </span>
                        {crnt.technologiesInp}
                      </p>
                      <p className="text-xs sm:text-sm">
                        <span className="font-bold">Features: </span>
                        {crnt.featuresInp}
                      </p>
                      <hr className="my-2" />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default DynamicResume;
