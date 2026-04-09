'use client'
import PageWrapper from "@/components/PageWrapper";
import Image from "next/image";
import React, { useState } from "react";

function page() {
  const [form, setForm] = useState({name: "", email: "", message: "",})
  const handleChange = (e)=>{
    setForm({...form, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(form);
    alert("Message sent! Thank you so much!")
  }
  return (
    <div className="relative">
      <div className="w-full h-[30vh] overflow-hidden">
        <Image
          src="/math1.jpg"
          alt="hero image"
          width={1200}
          height={600}
          className="w-full h-auto"
        />
      </div>
      <PageWrapper gradient="from-white to-pink-100" fontColor="text-black">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-5xl tracking-wide py-10">CONTACT</h1>
          <p className="text-center max-w-[400px] text-lg">
            Got any questions, suggestions or spotted something wrong on the
            website? Please reacvh out through the form or{" "}
            <a
              href="mailto:dakshpinjore@gmail.com"
              className="underline text-blue-400"
            >
              email here!
            </a>
          </p>
          <form className="flex flex-col justify-center gap-3 pt-10">
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="p-3 border"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className="p-3 border"
              required
            />
            <textarea
              name="message"
              placeholder="Your message here, please"
              required
              className="p-3 border h-32"
            />
            <button
              className="bg-black text-white py-3 hover:opacity-80 cursor-pointer tracking-widest"
              type="submit"
            >
              SEND
            </button>
          </form>
        </div>
      </PageWrapper>
    </div>
  );
}

export default page;
