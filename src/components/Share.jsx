import React, { useEffect, useRef } from 'react';
import { EmailIcon, EmailShareButton, FacebookIcon, FacebookShareButton, PinterestIcon, PinterestShareButton, TwitterIcon, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

const Share = ({ photodata, shareOpen, setShareOpen, shareDropUpRef }) => {

    // shareDropUpRef Menu Close Functionality
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
        <div className={`absolute bottom-[125%] bg-white  shadow-lg px-2 rounded-lg ${shareOpen ? "h-max py-4 border-[1px]" : "h-0 py-0 border-0 "} flex  flex-col gap-2 transition-all overflow-hidden`}>

            <FacebookShareButton url={photodata.links.html} className='flex items-center gap-1 border-2' onClick={() => setShareOpen(false)}>
                <FacebookIcon size={20} className='rounded-xl' />
                <span className=' text-sm'>Facebook</span>
            </FacebookShareButton>

            <EmailShareButton url={photodata.links.html} className='flex items-center gap-1 border-2' onClick={() => setShareOpen(false)}>
                <EmailIcon size={20} className=' rounded-xl' />
                <span className=' text-sm'>Email</span>
            </EmailShareButton>

            <WhatsappShareButton url={photodata.links.html} className='flex items-center gap-1 border-2' onClick={() => setShareOpen(false)}>
                <WhatsappIcon size={20} className=' rounded-xl' />
                <span className=' text-sm'>Whatsapp</span>
            </WhatsappShareButton>

            <TwitterShareButton url={photodata.links.html} className='flex items-center gap-1 border-2' onClick={() => setShareOpen(false)}>
                <TwitterIcon size={20} className=' rounded-xl' />
                <span className=' text-sm'>Twitter</span>
            </TwitterShareButton>

            <PinterestShareButton url={photodata.links.html} className='flex items-center gap-1 border-2' onClick={() => setShareOpen(false)}>
                <PinterestIcon size={20} className=' rounded-xl' />
                <span className=' text-sm'>Pinterest</span>
            </PinterestShareButton>


        </div>
    );
};

export default Share;