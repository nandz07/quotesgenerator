import React, { useState } from 'react'
import './RandomQuote.css'
import { IoLogoWhatsapp, IoMdRefresh } from "react-icons/io";

function RandomQuote() {
  let quotes=[]

  async function loadQuotes(){
    const response=await fetch("https://type.fit/api/quotes")
    quotes= await response.json()
  }

  const random=()=>{
    const select=quotes[Math.floor(Math.random()*quotes.length)]
    setQuote(select)
  }
  const [quote,setQuote]=useState({
    text:'Live the life , Live the moment',
    author:'Nandakumar T'
  })
  const wtsap=()=>{
    window.open(`https://api.whatsapp.com/send/?text=*${quote.text}* - ${quote.author.split(',')[0]}`)
  }

  loadQuotes()
  return (
    <div className="container">
      <div className="quote">
        {`" ${quote.text} "`}
      </div>
      <div>
        <div className="line"></div>
        <div className="bottom">
          <div className="author">- {quote.author.split(',')[0]}</div>
          <div className="icons">
          <IoMdRefresh onClick={()=>{random()}} />
          <IoLogoWhatsapp onClick={()=>{wtsap()}}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RandomQuote