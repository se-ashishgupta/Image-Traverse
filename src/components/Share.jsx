import React, { useEffect, useRef } from 'react';
import { FacebookIcon, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TelegramIcon, TelegramShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const Share = ({ photodata, shareOpen, setShareOpen, shareDropUpRef }) => {

    // shareDropup Menu Close Functionality
    useEffect(() => {
        function handleClickOutside(event) {
            if (shareDropUpRef.current && !shareDropUpRef.current.contains(event.target)) {
                // Clicked outside of the dropdown so close it
                setShareOpen(false);
            }
        }
        // Add the event listener
        document.addEventListener("click", handleClickOutside);

        // Remove the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className={`absolute bottom-[125%] bg-white  shadow-lg px-2 rounded-lg ${shareOpen ? "h-max py-4 border-[1px]" : "h-0 py-0 border-0 duration-0"} flex  flex-col gap-3 transition-all overflow-hidden`}>

            {/* Socila Media Icons For Sharing  */}
            <FacebookShareButton url={photodata.links.html} className='flex items-center gap-1' onClick={() => setShareOpen(false)}>
                <FacebookIcon size={20} round={true} />
                <span className=' text-sm'>Facebook</span>
            </FacebookShareButton>

            <WhatsappShareButton url={photodata.links.html} className='flex items-center gap-1' onClick={() => setShareOpen(false)}>
                <WhatsappIcon size={20} round={true} />
                <span className=' text-sm'>Whatsapp</span>
            </WhatsappShareButton>

            <TwitterShareButton url={photodata.links.html} className='flex items-center gap-1' onClick={() => setShareOpen(false)}>
                <TwitterIcon size={20} round={true} />
                <span className=' text-sm'>Twitter</span>
            </TwitterShareButton>

            <TelegramShareButton url={photodata.links.html} className='flex items-center gap-1' onClick={() => setShareOpen(false)}>
                <TelegramIcon size={20} round={true} />
                <span className=' text-sm'>Telegram</span>
            </TelegramShareButton>

            <LinkedinShareButton url={photodata.links.html} className='flex items-center gap-1' onClick={() => setShareOpen(false)}>
                <LinkedinIcon size={20} round={true} />
                <span className=' text-sm'>Linkedin</span>
            </LinkedinShareButton>


        </div>
    );
};

export default Share;