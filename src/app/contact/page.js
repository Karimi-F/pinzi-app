"use client";

import Button from "@/components/Button";
import { Github, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Footer from "../footer/page";

export default function Contact() {
  return (
    // <div className="flex justify-between border border-gray-100 bg-slate-50 text-black w-full">
    <div className="border border-gray-100 bg-slate-50 text-black w-full">
      <div>
        <div className="flex flex-col md:flex-row w-full min-h-screen justify-between space-x-8">
          <div className="w-full md:w-1/2 p-4 space-y-4">
            <h1 className="text-black font-bold text-4xl p-4">Get in touch</h1>
            <form className="space-y-2 bg-rose-200 rounded-xl p-4">
              <h4 className="text-2xl font-semibold">Send a Message</h4>
              <p>
                We'd love to hear about what you're looking for. Give us a few
                details below and we'll be in touch.
              </p>
              <div className="flex space-x-2">
                <label>Name:</label>
                <input
                  className="bg-gray-50 p-3 w-1/3 rounded-lg h-8"
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="bg-gray-50 p-3 w-1/3 rounded-lg h-8"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex space-x-5">
                <label>Email:</label>
                <input
                  className="bg-gray-50 p-3 w-1/2 rounded-lg h-8"
                  type="text"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex space-x-5">
                <label>Phone Number:</label>
                <input
                  className="bg-gray-50 p-3 w-1/2 rounded-lg h-8"
                  type="text"
                  placeholder="Phone Number"
                />
              </div>
              <div className="flex space-x-5">
                <label>Message</label>
                <textarea
                  type="text"
                  className="bg-gray-50 p-3 w-3/4 rounded-lg"
                  placeholder="Message"
                />
              </div>
              <Button>Submit</Button>
            </form>
          </div>

          <div className="w-full md:w-1/2 space-y-6 p-12 m-12">
            <div>
              <h4 className="font-semibold text-2xl">Call Us</h4>
              <p>Monday to Friday 8:00 am to 4:00pm</p>
              <div className="flex space-x-2 text-xl cursor-pointer text-black hover:text-red-600">
                <Phone />
                <p>+254 711-046-100</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-2xl">Visit Us</h4>
              <p>Visit our office headquarters</p>
              <div className="flex space-x-2 text-xl cursor-pointer text-black hover:text-red-600">
                <MapPin />
                <p>Pinzi Flashcards, 13 Memory Lane, Konza City, Kenya</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-2xl">Live Chat</h4>
              <p>Feel free to chat to us</p>
              <div className="flex space-x-2 text-xl cursor-pointer text-black hover:text-red-600">
                <Mail />
                <p>pinziflashcards@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="w-full h-64 md:h-full rounded-lg overflow-hidden shadow-lg">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Your+Business+Address"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div>
        <div>
          <h5>FAQ</h5>
          <h1>Frequently asked questions</h1>
        </div>
        <div>
          <h4>
            Culpa amet elit incididunt ipsum exercitation aute dolor elit enim
            tempor et sunt.
          </h4>
          <p>
            loremCillum voluptate aute proident tempor incididunt elit magna
            amet officia enim velit do. Elit tempor dolore ipsum aute ullamco
            esse. Non commodo deserunt nisi quis qui nostrud laborum nostrud.
            Dolor incididunt pariatur minim occaecat exercitation est amet nisi.
            Adipisicing aute qui sunt in. Ad incididunt ullamco ex occaecat
            nulla. Magna laboris veniam ad commodo et.
          </p>
          <h4>
            Culpa amet elit incididunt ipsum exercitation aute dolor elit enim
            tempor et sunt.
          </h4>
          <p>
            loremCillum voluptate aute proident tempor incididunt elit magna
            amet officia enim velit do. Elit tempor dolore ipsum aute ullamco
            esse. Non commodo deserunt nisi quis qui nostrud laborum nostrud.
            Dolor incididunt pariatur minim occaecat exercitation est amet nisi.
            Adipisicing aute qui sunt in. Ad incididunt ullamco ex occaecat
            nulla. Magna laboris veniam ad commodo et.
          </p>
          <h4>
            Culpa amet elit incididunt ipsum exercitation aute dolor elit enim
            tempor et sunt.
          </h4>
          <p>
            loremCillum voluptate aute proident tempor incididunt elit magna
            amet officia enim velit do. Elit tempor dolore ipsum aute ullamco
            esse. Non commodo deserunt nisi quis qui nostrud laborum nostrud.
            Dolor incididunt pariatur minim occaecat exercitation est amet nisi.
            Adipisicing aute qui sunt in. Ad incididunt ullamco ex occaecat
            nulla. Magna laboris veniam ad commodo et.
          </p>
          <h4>
            Culpa amet elit incididunt ipsum exercitation aute dolor elit enim
            tempor et sunt.
          </h4>
          <p>
            loremCillum voluptate aute proident tempor incididunt elit magna
            amet officia enim velit do. Elit tempor dolore ipsum aute ullamco
            esse. Non commodo deserunt nisi quis qui nostrud laborum nostrud.
            Dolor incididunt pariatur minim occaecat exercitation est amet nisi.
            Adipisicing aute qui sunt in. Ad incididunt ullamco ex occaecat
            nulla. Magna laboris veniam ad commodo et.
          </p>
          <h4>
            Culpa amet elit incididunt ipsum exercitation aute dolor elit enim
            tempor et sunt.
          </h4>
          <p>
            loremCillum voluptate aute proident tempor incididunt elit magna
            amet officia enim velit do. Elit tempor dolore ipsum aute ullamco
            esse. Non commodo deserunt nisi quis qui nostrud laborum nostrud.
            Dolor incididunt pariatur minim occaecat exercitation est amet nisi.
            Adipisicing aute qui sunt in. Ad incididunt ullamco ex occaecat
            nulla. Magna laboris veniam ad commodo et.
          </p>
        </div>
      </div>

<div className="flex">
<div className="p-4 w-1/4">
        <div className="p-4">
          <h2 className="font-bold text-xl">Pinzi Flashcards</h2>
        </div>
        <div className="p-4">
          <p>The smart way to learn and master Chinese characters.</p>
        </div>
      </div>

      <div className="p-4  w-1/4">
        <div className="p-4">
          <h2 className="font-bold text-xl">Links</h2>
        </div>
        <div className="p-4">
          <h4 className="cursor-pointer hover:text-red-500">Home</h4>
          {/* <h4 className="cursor-pointer hover:text-red-500">Features</h4> */}
          <h4 className="cursor-pointer hover:text-red-500">About</h4>
          <h4 className="cursor-pointer hover:text-red-500">Contact</h4>
        </div>
      </div>

      <div className="p-4 w-1/4">
        <div className="p-4">
          <h2 className="font-bold text-xl">Legal</h2>
        </div>
        <div className="p-4">
          <h4 className="cursor-pointer hover:text-red-500">
            Terms of Service
          </h4>
          <h4 className="cursor-pointer hover:text-red-500">Privacy Policy</h4>
          <h4 className="cursor-pointer hover:text-red-500">Cookie Policy</h4>
        </div>
      </div>

      <div className="p-4 w-1/4">
        <div className="p-4">
          <h2 className="font-bold text-xl">Connect</h2>
        </div>
        <div className="p-4 flex text-black-50 space-x-4">
          <h4 className="cursor-pointer hover:text-red-500">
            <Github />
          </h4>
          <h4 className="cursor-pointer hover:text-red-500">
            <Twitter />
          </h4>
          <h4 className="cursor-pointer hover:text-red-500">
            <Mail />
          </h4>
        </div>
      </div>
</div>
      
      <div className="text-center">I’m just one person building this in between learning <span className="text-red-600">汉字</span> and debugging Tailwind classes 😅
So if I don’t respond right away — I see you. And I appreciate you.</div>
      <Footer />
    </div>
  );
}
