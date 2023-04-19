import React from 'react'
import "./header.css"
import {AiOutlineMenu,AiOutlineSearch,AiOutlineBell} from "react-icons/ai"
import {MdKeyboardVoice} from "react-icons/md"
import {BsCameraVideo} from "react-icons/bs"

const Header = () => {
  return (
    <header className='header'>
        <div className='left'>
            <div className='menuBtn'>
               <AiOutlineMenu/>
            </div>
            <div className='logo'>
                <img src='./logo.png'/>
            </div>
        </div>

        <div className='middle'>
            <div className='inputSearchBox'>
                    <div className='searchIcon'>
                       <span> <AiOutlineSearch/></span>
                    </div>
                    <input type='text' placeholder='Search'/>
            </div>
            <div className='searchIconFixed'>
                <AiOutlineSearch/>
            </div>
            <div className='voiceIcon'>
                <MdKeyboardVoice/>
            </div>
        </div>

        <div className='right'>
            <div className='icons'>
                <AiOutlineSearch/>
            </div>
            <div className='icons desktop'>
                <BsCameraVideo/>
            </div>
            <div className='icons desktop'>
                <AiOutlineBell/>
            </div>
            <div className='profileImag'>
                {/* <img src=''/> */}
            </div>
        </div>
    </header>
  )
}

export default Header