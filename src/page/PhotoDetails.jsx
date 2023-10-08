import React, { useEffect, useRef, useState } from 'react';
import { BsFillFileArrowDownFill, BsDownload } from 'react-icons/bs';
import { FcLike } from 'react-icons/fc';
import { BiSolidUserCircle, BiSolidCity } from 'react-icons/bi';
import { AiOutlineShareAlt, AiOutlineGlobal } from 'react-icons/ai';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { searchPhotoById } from '../redux/action';
import Loader from '../components/Loader';

import Share from '../components/Share';

const PhotoDetails = () => {
    const params = useParams();
    const [shareOpen, setShareOpen] = useState(false);
    const shareDropUpRef = useRef(null);
    const { loading, photodata } = useSelector(state => state.photos);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(searchPhotoById(params.id));
        console.log(params.id);
    }, [params.id]);

    // const photodata = {
    //     "id": "_SPhQ1LVOFk",
    //     "slug": "a-dining-room-table-with-a-christmas-tree-in-the-corner-_SPhQ1LVOFk",
    //     "created_at": "2023-06-21T18:02:59Z",
    //     "updated_at": "2023-10-07T11:38:18Z",
    //     "promoted_at": "2023-09-11T07:32:01Z",
    //     "width": 4000,
    //     "height": 6000,
    //     "color": "#f3f3f3",
    //     "blur_hash": "L-NASD%gRiWA_Nt8aej@Rjaej[j[",
    //     "description": null,
    //     "alt_description": "a dining room table with a christmas tree in the corner",
    //     "breadcrumbs": [],
    //     "urls": {
    //         "raw": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8&ixlib=rb-4.0.3",
    //         "full": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8&ixlib=rb-4.0.3&q=85",
    //         "regular": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8&ixlib=rb-4.0.3&q=80&w=1080",
    //         "small": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8&ixlib=rb-4.0.3&q=80&w=400",
    //         "thumb": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8&ixlib=rb-4.0.3&q=80&w=200",
    //         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687370439151-b59deb97608c"
    //     },
    //     "links": {
    //         "self": "https://api.unsplash.com/photos/a-dining-room-table-with-a-christmas-tree-in-the-corner-_SPhQ1LVOFk",
    //         "html": "https://unsplash.com/photos/a-dining-room-table-with-a-christmas-tree-in-the-corner-_SPhQ1LVOFk",
    //         "download": "https://unsplash.com/photos/_SPhQ1LVOFk/download?ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8",
    //         "download_location": "https://api.unsplash.com/photos/_SPhQ1LVOFk/download?ixid=M3w1MTI2NzR8MHwxfGFsbHx8fHx8fHx8fDE2OTY3NDY1OTN8"
    //     },
    //     "likes": 20,
    //     "liked_by_user": false,
    //     "current_user_collections": [],
    //     "sponsorship": null,
    //     "topic_submissions": {},
    //     "user": {
    //         "id": "bxONC1i7sRY",
    //         "updated_at": "2023-10-08T04:09:42Z",
    //         "username": "laptiteminimaliste",
    //         "name": "Mélyna Côté",
    //         "first_name": "Mélyna",
    //         "last_name": "Côté",
    //         "twitter_username": null,
    //         "portfolio_url": "http://www.laptiteminimaliste.com",
    //         "bio": "Products/commercial photos \r\nLifestyle photographer",
    //         "location": "Montreal",
    //         "links": {
    //             "self": "https://api.unsplash.com/users/laptiteminimaliste",
    //             "html": "https://unsplash.com/@laptiteminimaliste",
    //             "photos": "https://api.unsplash.com/users/laptiteminimaliste/photos",
    //             "likes": "https://api.unsplash.com/users/laptiteminimaliste/likes",
    //             "portfolio": "https://api.unsplash.com/users/laptiteminimaliste/portfolio",
    //             "following": "https://api.unsplash.com/users/laptiteminimaliste/following",
    //             "followers": "https://api.unsplash.com/users/laptiteminimaliste/followers"
    //         },
    //         "profile_image": {
    //             "small": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //             "medium": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //             "large": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //         },
    //         "instagram_username": "melynacot_",
    //         "total_collections": 6,
    //         "total_likes": 1,
    //         "total_photos": 62,
    //         "accepted_tos": true,
    //         "for_hire": true,
    //         "social": {
    //             "instagram_username": "melynacot_",
    //             "portfolio_url": "http://www.laptiteminimaliste.com",
    //             "twitter_username": null,
    //             "paypal_email": null
    //         }
    //     },
    //     "exif": {
    //         "make": "SONY",
    //         "model": "ILCE-7M3",
    //         "name": "SONY, ILCE-7M3",
    //         "exposure_time": "1/400",
    //         "aperture": "5.6",
    //         "focal_length": "64.0",
    //         "iso": 1000
    //     },
    //     "location": {
    //         "name": null,
    //         "city": null,
    //         "country": null,
    //         "position": {
    //             "latitude": 0,
    //             "longitude": 0
    //         }
    //     },
    //     "meta": {
    //         "index": true
    //     },
    //     "public_domain": false,
    //     "tags": [
    //         {
    //             "type": "search",
    //             "title": "table"
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "christmas",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "images",
    //                         "pretty_slug": "Images"
    //                     },
    //                     "category": {
    //                         "slug": "events",
    //                         "pretty_slug": "Events"
    //                     },
    //                     "subcategory": {
    //                         "slug": "christmas",
    //                         "pretty_slug": "Christmas"
    //                     }
    //                 },
    //                 "title": "Christmas images",
    //                 "subtitle": "Download free christmas images",
    //                 "description": "Christmas is the time to be jolly, and there's nothing jollier than Unsplash's collection of Christmas images. Trees, snow, christmas lights, and magical feasts: Unsplash has images of it all, and they're totally free to use.",
    //                 "meta_title": "Christmas Pictures [2020] | Download Free Images on Unsplash",
    //                 "meta_description": "Choose from hundreds of free Christmas pictures. Download HD Christmas photos for free on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "ySNkCkdKyTY",
    //                     "slug": "ySNkCkdKyTY",
    //                     "created_at": "2016-01-02T22:12:54Z",
    //                     "updated_at": "2023-10-02T08:00:27Z",
    //                     "promoted_at": "2016-01-02T22:12:54Z",
    //                     "width": 6000,
    //                     "height": 4000,
    //                     "color": "#260c0c",
    //                     "blur_hash": "LSDJFi4UxvIB%LM{ozsoRQkVxYV[",
    //                     "description": null,
    //                     "alt_description": "bauble balls hang on christmas tree",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1451772741724-d20990422508"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/ySNkCkdKyTY",
    //                         "html": "https://unsplash.com/photos/ySNkCkdKyTY",
    //                         "download": "https://unsplash.com/photos/ySNkCkdKyTY/download",
    //                         "download_location": "https://api.unsplash.com/photos/ySNkCkdKyTY/download"
    //                     },
    //                     "likes": 1651,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "lWyqqgyrHHw",
    //                         "updated_at": "2023-10-02T21:42:31Z",
    //                         "username": "frostroomhead",
    //                         "name": "Rodion Kutsaiev",
    //                         "first_name": "Rodion",
    //                         "last_name": "Kutsaiev",
    //                         "twitter_username": "Frostroomhead",
    //                         "portfolio_url": null,
    //                         "bio": "________",
    //                         "location": "Melitopol', Ukraine",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/frostroomhead",
    //                             "html": "https://unsplash.com/@frostroomhead",
    //                             "photos": "https://api.unsplash.com/users/frostroomhead/photos",
    //                             "likes": "https://api.unsplash.com/users/frostroomhead/likes",
    //                             "portfolio": "https://api.unsplash.com/users/frostroomhead/portfolio",
    //                             "following": "https://api.unsplash.com/users/frostroomhead/following",
    //                             "followers": "https://api.unsplash.com/users/frostroomhead/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1643890336343-094f0309d97cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1643890336343-094f0309d97cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1643890336343-094f0309d97cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "Frostroomhead",
    //                         "total_collections": 23,
    //                         "total_likes": 1012,
    //                         "total_photos": 1349,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "Frostroomhead",
    //                             "portfolio_url": null,
    //                             "twitter_username": "Frostroomhead",
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "lights",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "backgrounds",
    //                         "pretty_slug": "Backgrounds"
    //                     },
    //                     "category": {
    //                         "slug": "colors",
    //                         "pretty_slug": "Colors"
    //                     },
    //                     "subcategory": {
    //                         "slug": "light",
    //                         "pretty_slug": "Light"
    //                     }
    //                 },
    //                 "title": "Light backgrounds",
    //                 "subtitle": "Download free light background images",
    //                 "description": "Unsplash has an amazing collection of light backgrounds, covering all different shades and styles. Our images are professionally-shot, and you can use any/all of them for free!",
    //                 "meta_title": "900+ Light Background Images: Download HD Backgrounds on Unsplash",
    //                 "meta_description": "Choose from hundreds of free light backgrounds. Download beautiful, curated free backgrounds on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "2x19-mRQgX8",
    //                     "slug": "2x19-mRQgX8",
    //                     "created_at": "2016-12-19T16:23:39Z",
    //                     "updated_at": "2023-09-26T06:01:01Z",
    //                     "promoted_at": "2016-12-19T16:23:39Z",
    //                     "width": 5760,
    //                     "height": 3840,
    //                     "color": "#26260c",
    //                     "blur_hash": "LB8g4=R-0#WB=_WWNHWCE2ay={kC",
    //                     "description": null,
    //                     "alt_description": "person holding string lights",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1482164565953-04b62dcac1cd"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/2x19-mRQgX8",
    //                         "html": "https://unsplash.com/photos/2x19-mRQgX8",
    //                         "download": "https://unsplash.com/photos/2x19-mRQgX8/download",
    //                         "download_location": "https://api.unsplash.com/photos/2x19-mRQgX8/download"
    //                     },
    //                     "likes": 2252,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {
    //                         "spirituality": {
    //                             "status": "approved",
    //                             "approved_on": "2020-04-06T14:20:22Z"
    //                         }
    //                     },
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "eoa2PWCTCbk",
    //                         "updated_at": "2023-09-13T03:30:16Z",
    //                         "username": "joshboot",
    //                         "name": "Josh Boot",
    //                         "first_name": "Josh",
    //                         "last_name": "Boot",
    //                         "twitter_username": "joshboot_",
    //                         "portfolio_url": "http://www.creativedept.co.uk",
    //                         "bio": "Photographer & Film-Maker from Sheffield that loves capturing light & beauty.",
    //                         "location": "Sheffield",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/joshboot",
    //                             "html": "https://unsplash.com/@joshboot",
    //                             "photos": "https://api.unsplash.com/users/joshboot/photos",
    //                             "likes": "https://api.unsplash.com/users/joshboot/likes",
    //                             "portfolio": "https://api.unsplash.com/users/joshboot/portfolio",
    //                             "following": "https://api.unsplash.com/users/joshboot/following",
    //                             "followers": "https://api.unsplash.com/users/joshboot/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1456313839517-8fda35d2f1e5?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1456313839517-8fda35d2f1e5?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1456313839517-8fda35d2f1e5?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "joshboot",
    //                         "total_collections": 0,
    //                         "total_likes": 98,
    //                         "total_photos": 16,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "joshboot",
    //                             "portfolio_url": "http://www.creativedept.co.uk",
    //                             "twitter_username": "joshboot_",
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "winter",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "images",
    //                         "pretty_slug": "Images"
    //                     },
    //                     "category": {
    //                         "slug": "nature",
    //                         "pretty_slug": "Nature"
    //                     },
    //                     "subcategory": {
    //                         "slug": "winter",
    //                         "pretty_slug": "Winter"
    //                     }
    //                 },
    //                 "title": "Winter images & pictures",
    //                 "subtitle": "Download free winter images",
    //                 "description": "Choose from a curated selection of winter photos. Always free on Unsplash.",
    //                 "meta_title": "Best 500+ Winter Pictures [2020] | Download Free Images & Stock Photos on Unsplash",
    //                 "meta_description": "Choose from hundreds of free winter pictures. Download HD winter photos for free on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "6-JIDCnZG2E",
    //                     "slug": "6-JIDCnZG2E",
    //                     "created_at": "2016-12-03T14:29:27Z",
    //                     "updated_at": "2023-10-01T04:00:58Z",
    //                     "promoted_at": "2016-12-03T14:29:27Z",
    //                     "width": 4667,
    //                     "height": 3106,
    //                     "color": "#a6a6a6",
    //                     "blur_hash": "LPI=iZMxD$WC.Tozaef5NGogj[kC",
    //                     "description": "A bright red male Northern Cardinal sits perched on a branch in the falling snow.",
    //                     "alt_description": "selective focus photography of cardinal bird on tree branch",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1480775292373-5175d0634811?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1480775292373-5175d0634811?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1480775292373-5175d0634811?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1480775292373-5175d0634811?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1480775292373-5175d0634811?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1480775292373-5175d0634811"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/6-JIDCnZG2E",
    //                         "html": "https://unsplash.com/photos/6-JIDCnZG2E",
    //                         "download": "https://unsplash.com/photos/6-JIDCnZG2E/download",
    //                         "download_location": "https://api.unsplash.com/photos/6-JIDCnZG2E/download"
    //                     },
    //                     "likes": 3110,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {
    //                         "nature": {
    //                             "status": "approved",
    //                             "approved_on": "2020-04-06T14:20:12Z"
    //                         },
    //                         "wallpapers": {
    //                             "status": "approved",
    //                             "approved_on": "2020-04-06T14:20:10Z"
    //                         }
    //                     },
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "Cd-djTuTKd4",
    //                         "updated_at": "2023-09-14T10:13:38Z",
    //                         "username": "rayhennessy",
    //                         "name": "Ray Hennessy",
    //                         "first_name": "Ray",
    //                         "last_name": "Hennessy",
    //                         "twitter_username": null,
    //                         "portfolio_url": "http://www.rayhennessy.com",
    //                         "bio": "Full-time wildlife photographer with a passion for photographing birds creatively and teaching.",
    //                         "location": "Clementon, NJ",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/rayhennessy",
    //                             "html": "https://unsplash.com/@rayhennessy",
    //                             "photos": "https://api.unsplash.com/users/rayhennessy/photos",
    //                             "likes": "https://api.unsplash.com/users/rayhennessy/likes",
    //                             "portfolio": "https://api.unsplash.com/users/rayhennessy/portfolio",
    //                             "following": "https://api.unsplash.com/users/rayhennessy/following",
    //                             "followers": "https://api.unsplash.com/users/rayhennessy/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1610228435971-e3250f60d2e0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1610228435971-e3250f60d2e0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1610228435971-e3250f60d2e0image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "rayhennessy_wildlife",
    //                         "total_collections": 3,
    //                         "total_likes": 4,
    //                         "total_photos": 114,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "rayhennessy_wildlife",
    //                             "portfolio_url": "http://www.rayhennessy.com",
    //                             "twitter_username": null,
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             "type": "search",
    //             "title": "furniture"
    //         },
    //         {
    //             "type": "search",
    //             "title": "indoors"
    //         },
    //         {
    //             "type": "search",
    //             "title": "dining room"
    //         },
    //         {
    //             "type": "search",
    //             "title": "dining table"
    //         },
    //         {
    //             "type": "search",
    //             "title": "tabletop"
    //         },
    //         {
    //             "type": "search",
    //             "title": "festival"
    //         },
    //         {
    //             "type": "search",
    //             "title": "hanukkah menorah"
    //         },
    //         {
    //             "type": "search",
    //             "title": "candle"
    //         },
    //         {
    //             "type": "search",
    //             "title": "home decor"
    //         }
    //     ],
    //     "tags_preview": [
    //         {
    //             "type": "search",
    //             "title": "table"
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "christmas",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "images",
    //                         "pretty_slug": "Images"
    //                     },
    //                     "category": {
    //                         "slug": "events",
    //                         "pretty_slug": "Events"
    //                     },
    //                     "subcategory": {
    //                         "slug": "christmas",
    //                         "pretty_slug": "Christmas"
    //                     }
    //                 },
    //                 "title": "Christmas images",
    //                 "subtitle": "Download free christmas images",
    //                 "description": "Christmas is the time to be jolly, and there's nothing jollier than Unsplash's collection of Christmas images. Trees, snow, christmas lights, and magical feasts: Unsplash has images of it all, and they're totally free to use.",
    //                 "meta_title": "Christmas Pictures [2020] | Download Free Images on Unsplash",
    //                 "meta_description": "Choose from hundreds of free Christmas pictures. Download HD Christmas photos for free on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "ySNkCkdKyTY",
    //                     "slug": "ySNkCkdKyTY",
    //                     "created_at": "2016-01-02T22:12:54Z",
    //                     "updated_at": "2023-10-02T08:00:27Z",
    //                     "promoted_at": "2016-01-02T22:12:54Z",
    //                     "width": 6000,
    //                     "height": 4000,
    //                     "color": "#260c0c",
    //                     "blur_hash": "LSDJFi4UxvIB%LM{ozsoRQkVxYV[",
    //                     "description": null,
    //                     "alt_description": "bauble balls hang on christmas tree",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1451772741724-d20990422508?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1451772741724-d20990422508"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/ySNkCkdKyTY",
    //                         "html": "https://unsplash.com/photos/ySNkCkdKyTY",
    //                         "download": "https://unsplash.com/photos/ySNkCkdKyTY/download",
    //                         "download_location": "https://api.unsplash.com/photos/ySNkCkdKyTY/download"
    //                     },
    //                     "likes": 1651,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "lWyqqgyrHHw",
    //                         "updated_at": "2023-10-02T21:42:31Z",
    //                         "username": "frostroomhead",
    //                         "name": "Rodion Kutsaiev",
    //                         "first_name": "Rodion",
    //                         "last_name": "Kutsaiev",
    //                         "twitter_username": "Frostroomhead",
    //                         "portfolio_url": null,
    //                         "bio": "________",
    //                         "location": "Melitopol', Ukraine",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/frostroomhead",
    //                             "html": "https://unsplash.com/@frostroomhead",
    //                             "photos": "https://api.unsplash.com/users/frostroomhead/photos",
    //                             "likes": "https://api.unsplash.com/users/frostroomhead/likes",
    //                             "portfolio": "https://api.unsplash.com/users/frostroomhead/portfolio",
    //                             "following": "https://api.unsplash.com/users/frostroomhead/following",
    //                             "followers": "https://api.unsplash.com/users/frostroomhead/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1643890336343-094f0309d97cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1643890336343-094f0309d97cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1643890336343-094f0309d97cimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "Frostroomhead",
    //                         "total_collections": 23,
    //                         "total_likes": 1012,
    //                         "total_photos": 1349,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "Frostroomhead",
    //                             "portfolio_url": null,
    //                             "twitter_username": "Frostroomhead",
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         },
    //         {
    //             "type": "landing_page",
    //             "title": "lights",
    //             "source": {
    //                 "ancestry": {
    //                     "type": {
    //                         "slug": "backgrounds",
    //                         "pretty_slug": "Backgrounds"
    //                     },
    //                     "category": {
    //                         "slug": "colors",
    //                         "pretty_slug": "Colors"
    //                     },
    //                     "subcategory": {
    //                         "slug": "light",
    //                         "pretty_slug": "Light"
    //                     }
    //                 },
    //                 "title": "Light backgrounds",
    //                 "subtitle": "Download free light background images",
    //                 "description": "Unsplash has an amazing collection of light backgrounds, covering all different shades and styles. Our images are professionally-shot, and you can use any/all of them for free!",
    //                 "meta_title": "900+ Light Background Images: Download HD Backgrounds on Unsplash",
    //                 "meta_description": "Choose from hundreds of free light backgrounds. Download beautiful, curated free backgrounds on Unsplash.",
    //                 "cover_photo": {
    //                     "id": "2x19-mRQgX8",
    //                     "slug": "2x19-mRQgX8",
    //                     "created_at": "2016-12-19T16:23:39Z",
    //                     "updated_at": "2023-09-26T06:01:01Z",
    //                     "promoted_at": "2016-12-19T16:23:39Z",
    //                     "width": 5760,
    //                     "height": 3840,
    //                     "color": "#26260c",
    //                     "blur_hash": "LB8g4=R-0#WB=_WWNHWCE2ay={kC",
    //                     "description": null,
    //                     "alt_description": "person holding string lights",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1482164565953-04b62dcac1cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1482164565953-04b62dcac1cd"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/2x19-mRQgX8",
    //                         "html": "https://unsplash.com/photos/2x19-mRQgX8",
    //                         "download": "https://unsplash.com/photos/2x19-mRQgX8/download",
    //                         "download_location": "https://api.unsplash.com/photos/2x19-mRQgX8/download"
    //                     },
    //                     "likes": 2252,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {
    //                         "spirituality": {
    //                             "status": "approved",
    //                             "approved_on": "2020-04-06T14:20:22Z"
    //                         }
    //                     },
    //                     "premium": false,
    //                     "plus": false,
    //                     "user": {
    //                         "id": "eoa2PWCTCbk",
    //                         "updated_at": "2023-09-13T03:30:16Z",
    //                         "username": "joshboot",
    //                         "name": "Josh Boot",
    //                         "first_name": "Josh",
    //                         "last_name": "Boot",
    //                         "twitter_username": "joshboot_",
    //                         "portfolio_url": "http://www.creativedept.co.uk",
    //                         "bio": "Photographer & Film-Maker from Sheffield that loves capturing light & beauty.",
    //                         "location": "Sheffield",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/joshboot",
    //                             "html": "https://unsplash.com/@joshboot",
    //                             "photos": "https://api.unsplash.com/users/joshboot/photos",
    //                             "likes": "https://api.unsplash.com/users/joshboot/likes",
    //                             "portfolio": "https://api.unsplash.com/users/joshboot/portfolio",
    //                             "following": "https://api.unsplash.com/users/joshboot/following",
    //                             "followers": "https://api.unsplash.com/users/joshboot/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1456313839517-8fda35d2f1e5?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1456313839517-8fda35d2f1e5?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1456313839517-8fda35d2f1e5?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "joshboot",
    //                         "total_collections": 0,
    //                         "total_likes": 98,
    //                         "total_photos": 16,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "joshboot",
    //                             "portfolio_url": "http://www.creativedept.co.uk",
    //                             "twitter_username": "joshboot_",
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //     ],
    //     "views": 213705,
    //     "downloads": 2396,
    //     "topics": [],
    //     "related_collections": {
    //         "total": 3,
    //         "type": "related",
    //         "results": [
    //             {
    //                 "id": "zu7iuFM6a78",
    //                 "title": "Random",
    //                 "description": null,
    //                 "published_at": "2023-03-24T13:24:56Z",
    //                 "last_collected_at": "2023-10-06T20:23:13Z",
    //                 "updated_at": "2023-10-06T20:23:13Z",
    //                 "featured": false,
    //                 "total_photos": 276,
    //                 "private": false,
    //                 "share_key": "ec68cbcd7dce2f44d9b15cfe7bfbe650",
    //                 "tags": [
    //                     {
    //                         "type": "search",
    //                         "title": "random"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "outdoor"
    //                     },
    //                     {
    //                         "type": "landing_page",
    //                         "title": "background",
    //                         "source": {
    //                             "ancestry": {
    //                                 "type": {
    //                                     "slug": "backgrounds",
    //                                     "pretty_slug": "Backgrounds"
    //                                 }
    //                             },
    //                             "title": "Hq background images",
    //                             "subtitle": "Download free backgrounds",
    //                             "description": "Browse our beautiful selection of free background images–all submitted by our community of talented contributors and completely free to download and use.",
    //                             "meta_title": "Best 100+ Free Background Images [HD] | Download your next background photo on Unsplash",
    //                             "meta_description": "Download the perfect background images. Find over 100+ of the best free background images. Free for commercial use ✓ No attribution required ✓ Copyright-free ✓",
    //                             "cover_photo": {
    //                                 "id": "fMUIVein7Ng",
    //                                 "slug": "fMUIVein7Ng",
    //                                 "created_at": "2017-05-15T23:49:10Z",
    //                                 "updated_at": "2023-09-26T23:01:58Z",
    //                                 "promoted_at": "2017-05-16T09:06:41Z",
    //                                 "width": 3847,
    //                                 "height": 5583,
    //                                 "color": "#c0d9d9",
    //                                 "blur_hash": "LtJ@tjEyjFj[lov~Rja{-Cx]bbWC",
    //                                 "description": "After getting many photos for a project, I am also trying to get images to share with the Unsplash community. Here’s an attempt at abstracting a detail of the amazing architecture of CCPV.",
    //                                 "alt_description": "closeup photo of black and red building",
    //                                 "breadcrumbs": [],
    //                                 "urls": {
    //                                     "raw": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3",
    //                                     "full": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                                     "regular": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                                     "small": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                                     "thumb": "https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                                     "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1494891848038-7bd202a2afeb"
    //                                 },
    //                                 "links": {
    //                                     "self": "https://api.unsplash.com/photos/fMUIVein7Ng",
    //                                     "html": "https://unsplash.com/photos/fMUIVein7Ng",
    //                                     "download": "https://unsplash.com/photos/fMUIVein7Ng/download",
    //                                     "download_location": "https://api.unsplash.com/photos/fMUIVein7Ng/download"
    //                                 },
    //                                 "likes": 1908,
    //                                 "liked_by_user": false,
    //                                 "current_user_collections": [],
    //                                 "sponsorship": null,
    //                                 "topic_submissions": {
    //                                     "architecture-interior": {
    //                                         "status": "approved",
    //                                         "approved_on": "2020-04-06T14:20:14Z"
    //                                     },
    //                                     "color-of-water": {
    //                                         "status": "approved",
    //                                         "approved_on": "2022-04-21T15:04:21Z"
    //                                     },
    //                                     "wallpapers": {
    //                                         "status": "approved",
    //                                         "approved_on": "2020-04-06T14:20:09Z"
    //                                     }
    //                                 },
    //                                 "premium": false,
    //                                 "plus": false,
    //                                 "user": {
    //                                     "id": "hnq0aaqF_Qo",
    //                                     "updated_at": "2023-09-26T06:08:38Z",
    //                                     "username": "scottwebb",
    //                                     "name": "Scott Webb",
    //                                     "first_name": "Scott",
    //                                     "last_name": "Webb",
    //                                     "twitter_username": null,
    //                                     "portfolio_url": "https://scottwebb.me/",
    //                                     "bio": "If you like my work and you'd like to support me, you can consider a donation 👉  http://www.paypal.me/scottrwebb | Donation goal for a new lens: $351.01 of $449 | Thank you Jay D. 🙏",
    //                                     "location": "London, Ontario, Canada",
    //                                     "links": {
    //                                         "self": "https://api.unsplash.com/users/scottwebb",
    //                                         "html": "https://unsplash.com/@scottwebb",
    //                                         "photos": "https://api.unsplash.com/users/scottwebb/photos",
    //                                         "likes": "https://api.unsplash.com/users/scottwebb/likes",
    //                                         "portfolio": "https://api.unsplash.com/users/scottwebb/portfolio",
    //                                         "following": "https://api.unsplash.com/users/scottwebb/following",
    //                                         "followers": "https://api.unsplash.com/users/scottwebb/followers"
    //                                     },
    //                                     "profile_image": {
    //                                         "small": "https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                                         "medium": "https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                                         "large": "https://images.unsplash.com/profile-1598557047185-d94f7fc56f69image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                                     },
    //                                     "instagram_username": "scottwebb",
    //                                     "total_collections": 46,
    //                                     "total_likes": 4155,
    //                                     "total_photos": 804,
    //                                     "accepted_tos": true,
    //                                     "for_hire": true,
    //                                     "social": {
    //                                         "instagram_username": "scottwebb",
    //                                         "portfolio_url": "https://scottwebb.me/",
    //                                         "twitter_username": null,
    //                                         "paypal_email": null
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     },
    //                     {
    //                         "type": "landing_page",
    //                         "title": "scenery",
    //                         "source": {
    //                             "ancestry": {
    //                                 "type": {
    //                                     "slug": "wallpapers",
    //                                     "pretty_slug": "HD Wallpapers"
    //                                 },
    //                                 "category": {
    //                                     "slug": "nature",
    //                                     "pretty_slug": "Nature"
    //                                 },
    //                                 "subcategory": {
    //                                     "slug": "scenery",
    //                                     "pretty_slug": "Scenery"
    //                                 }
    //                             },
    //                             "title": "Hd scenery wallpapers",
    //                             "subtitle": "Download free scenery wallpapers",
    //                             "description": "Choose from a curated selection of scenery wallpapers for your mobile and desktop screens. Always free on Unsplash.",
    //                             "meta_title": "Scenery Wallpapers: Free HD Download [500+ HQ] | Unsplash",
    //                             "meta_description": "Choose from hundreds of free scenery wallpapers. Download HD wallpapers for free on Unsplash.",
    //                             "cover_photo": {
    //                                 "id": "txtWlEUyW2Y",
    //                                 "slug": "txtWlEUyW2Y",
    //                                 "created_at": "2017-07-17T20:21:51Z",
    //                                 "updated_at": "2023-10-02T19:01:38Z",
    //                                 "promoted_at": "2017-07-19T12:00:45Z",
    //                                 "width": 6000,
    //                                 "height": 4000,
    //                                 "color": "#d9d9f3",
    //                                 "blur_hash": "L{Ez8JR.WCaxyGaeWVa$RjWCoJjt",
    //                                 "description": null,
    //                                 "alt_description": "brown mountain under clear blue sky",
    //                                 "breadcrumbs": [],
    //                                 "urls": {
    //                                     "raw": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3",
    //                                     "full": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                                     "regular": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                                     "small": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                                     "thumb": "https://images.unsplash.com/photo-1500322969630-a26ab6eb64cc?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                                     "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1500322969630-a26ab6eb64cc"
    //                                 },
    //                                 "links": {
    //                                     "self": "https://api.unsplash.com/photos/txtWlEUyW2Y",
    //                                     "html": "https://unsplash.com/photos/txtWlEUyW2Y",
    //                                     "download": "https://unsplash.com/photos/txtWlEUyW2Y/download",
    //                                     "download_location": "https://api.unsplash.com/photos/txtWlEUyW2Y/download"
    //                                 },
    //                                 "likes": 377,
    //                                 "liked_by_user": false,
    //                                 "current_user_collections": [],
    //                                 "sponsorship": null,
    //                                 "topic_submissions": {},
    //                                 "premium": false,
    //                                 "plus": false,
    //                                 "user": {
    //                                     "id": "qC-urTD_62E",
    //                                     "updated_at": "2023-10-02T11:51:12Z",
    //                                     "username": "huguesdb",
    //                                     "name": "Hugues de BUYER-MIMEURE",
    //                                     "first_name": "Hugues",
    //                                     "last_name": "de BUYER-MIMEURE",
    //                                     "twitter_username": null,
    //                                     "portfolio_url": "http://instagram.com/huguesdbm/",
    //                                     "bio": "Hi, I'm a french photographer with Sony Alpha 7IV based in Lyon, France.",
    //                                     "location": "Lyon",
    //                                     "links": {
    //                                         "self": "https://api.unsplash.com/users/huguesdb",
    //                                         "html": "https://unsplash.com/@huguesdb",
    //                                         "photos": "https://api.unsplash.com/users/huguesdb/photos",
    //                                         "likes": "https://api.unsplash.com/users/huguesdb/likes",
    //                                         "portfolio": "https://api.unsplash.com/users/huguesdb/portfolio",
    //                                         "following": "https://api.unsplash.com/users/huguesdb/following",
    //                                         "followers": "https://api.unsplash.com/users/huguesdb/followers"
    //                                     },
    //                                     "profile_image": {
    //                                         "small": "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                                         "medium": "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                                         "large": "https://images.unsplash.com/profile-1500389500141-d453d040335c?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                                     },
    //                                     "instagram_username": "huguesdbm",
    //                                     "total_collections": 0,
    //                                     "total_likes": 43,
    //                                     "total_photos": 64,
    //                                     "accepted_tos": true,
    //                                     "for_hire": false,
    //                                     "social": {
    //                                         "instagram_username": "huguesdbm",
    //                                         "portfolio_url": "http://instagram.com/huguesdbm/",
    //                                         "twitter_username": null,
    //                                         "paypal_email": null
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     },
    //                     {
    //                         "type": "landing_page",
    //                         "title": "wallpaper",
    //                         "source": {
    //                             "ancestry": {
    //                                 "type": {
    //                                     "slug": "wallpapers",
    //                                     "pretty_slug": "HD Wallpapers"
    //                                 }
    //                             },
    //                             "title": "Hd wallpapers",
    //                             "subtitle": "Download free wallpapers",
    //                             "description": "Choose from the highest quality selection of high-definition wallpapers–all submitted by our talented community of contributors. Free to download and use for your mobile and desktop screens.",
    //                             "meta_title": "Download Free HD Wallpapers [Mobile + Desktop] | Unsplash",
    //                             "meta_description": "Download the best HD and Ultra HD Wallpapers for free. Use them as wallpapers for your mobile or desktop screens.",
    //                             "cover_photo": {
    //                                 "id": "VEkIsvDviSs",
    //                                 "slug": "VEkIsvDviSs",
    //                                 "created_at": "2018-10-23T05:38:21Z",
    //                                 "updated_at": "2023-10-02T07:04:31Z",
    //                                 "promoted_at": "2018-10-24T13:12:35Z",
    //                                 "width": 5000,
    //                                 "height": 3333,
    //                                 "color": "#f3c0c0",
    //                                 "blur_hash": "LlLf,=%2WBax}nfhfkj[^iW.WBof",
    //                                 "description": "Life is full of adventures. This image was created during one of my own adventures on the top of Fronalpstock in Switzerland. During the day thousands and thousands of tourists  where passing by this spot. But the last chairlift was running at 5:30pm. Suddently the place became very quiet and calm. The fog started to clear up and reveal the two peaks.  This image represents one of the most beautiful sunsets I ever saw.",
    //                                 "alt_description": "a mountain with a pink sky above the clouds",
    //                                 "breadcrumbs": [],
    //                                 "urls": {
    //                                     "raw": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3",
    //                                     "full": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                                     "regular": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                                     "small": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                                     "thumb": "https://images.unsplash.com/photo-1540270776932-e72e7c2d11cd?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                                     "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1540270776932-e72e7c2d11cd"
    //                                 },
    //                                 "links": {
    //                                     "self": "https://api.unsplash.com/photos/VEkIsvDviSs",
    //                                     "html": "https://unsplash.com/photos/VEkIsvDviSs",
    //                                     "download": "https://unsplash.com/photos/VEkIsvDviSs/download",
    //                                     "download_location": "https://api.unsplash.com/photos/VEkIsvDviSs/download"
    //                                 },
    //                                 "likes": 1112,
    //                                 "liked_by_user": false,
    //                                 "current_user_collections": [],
    //                                 "sponsorship": null,
    //                                 "topic_submissions": {
    //                                     "nature": {
    //                                         "status": "approved",
    //                                         "approved_on": "2020-04-06T14:20:12Z"
    //                                     },
    //                                     "wallpapers": {
    //                                         "status": "approved",
    //                                         "approved_on": "2020-04-06T14:20:09Z"
    //                                     }
    //                                 },
    //                                 "premium": false,
    //                                 "plus": false,
    //                                 "user": {
    //                                     "id": "1oL7MvktvW4",
    //                                     "updated_at": "2023-09-25T07:25:04Z",
    //                                     "username": "borisbaldinger",
    //                                     "name": "Boris Baldinger",
    //                                     "first_name": "Boris",
    //                                     "last_name": "Baldinger",
    //                                     "twitter_username": "borisbaldinger",
    //                                     "portfolio_url": "https://www.boris-baldinger.com",
    //                                     "bio": "Father of 3 | Business photographer with a fable for nature | Speaker | Teacher | Social Media Fan",
    //                                     "location": "Switzerland",
    //                                     "links": {
    //                                         "self": "https://api.unsplash.com/users/borisbaldinger",
    //                                         "html": "https://unsplash.com/@borisbaldinger",
    //                                         "photos": "https://api.unsplash.com/users/borisbaldinger/photos",
    //                                         "likes": "https://api.unsplash.com/users/borisbaldinger/likes",
    //                                         "portfolio": "https://api.unsplash.com/users/borisbaldinger/portfolio",
    //                                         "following": "https://api.unsplash.com/users/borisbaldinger/following",
    //                                         "followers": "https://api.unsplash.com/users/borisbaldinger/followers"
    //                                     },
    //                                     "profile_image": {
    //                                         "small": "https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                                         "medium": "https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                                         "large": "https://images.unsplash.com/profile-1552053169443-ad3a5339ce69?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                                     },
    //                                     "instagram_username": "borisbaldinger",
    //                                     "total_collections": 3,
    //                                     "total_likes": 71,
    //                                     "total_photos": 16,
    //                                     "accepted_tos": true,
    //                                     "for_hire": true,
    //                                     "social": {
    //                                         "instagram_username": "borisbaldinger",
    //                                         "portfolio_url": "https://www.boris-baldinger.com",
    //                                         "twitter_username": "borisbaldinger",
    //                                         "paypal_email": null
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "sea"
    //                     }
    //                 ],
    //                 "links": {
    //                     "self": "https://api.unsplash.com/collections/zu7iuFM6a78",
    //                     "html": "https://unsplash.com/collections/zu7iuFM6a78/random",
    //                     "photos": "https://api.unsplash.com/collections/zu7iuFM6a78/photos",
    //                     "related": "https://api.unsplash.com/collections/zu7iuFM6a78/related"
    //                 },
    //                 "user": {
    //                     "id": "D6I9OpxumAo",
    //                     "updated_at": "2023-10-05T18:53:21Z",
    //                     "username": "srodbell7",
    //                     "name": "Samantha Rodbell",
    //                     "first_name": "Samantha",
    //                     "last_name": "Rodbell",
    //                     "twitter_username": null,
    //                     "portfolio_url": null,
    //                     "bio": null,
    //                     "location": null,
    //                     "links": {
    //                         "self": "https://api.unsplash.com/users/srodbell7",
    //                         "html": "https://unsplash.com/@srodbell7",
    //                         "photos": "https://api.unsplash.com/users/srodbell7/photos",
    //                         "likes": "https://api.unsplash.com/users/srodbell7/likes",
    //                         "portfolio": "https://api.unsplash.com/users/srodbell7/portfolio",
    //                         "following": "https://api.unsplash.com/users/srodbell7/following",
    //                         "followers": "https://api.unsplash.com/users/srodbell7/followers"
    //                     },
    //                     "profile_image": {
    //                         "small": "https://images.unsplash.com/profile-fb-1567099204-891a7522537e.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                         "medium": "https://images.unsplash.com/profile-fb-1567099204-891a7522537e.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                         "large": "https://images.unsplash.com/profile-fb-1567099204-891a7522537e.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                     },
    //                     "instagram_username": null,
    //                     "total_collections": 23,
    //                     "total_likes": 1,
    //                     "total_photos": 0,
    //                     "accepted_tos": false,
    //                     "for_hire": false,
    //                     "social": {
    //                         "instagram_username": null,
    //                         "portfolio_url": null,
    //                         "twitter_username": null,
    //                         "paypal_email": null
    //                     }
    //                 },
    //                 "cover_photo": {
    //                     "id": "-X9fQQSTq-0",
    //                     "slug": "a-plant-in-a-room-with-a-mirror-on-the-wall--X9fQQSTq-0",
    //                     "created_at": "2023-09-20T18:58:42Z",
    //                     "updated_at": "2023-10-08T00:29:51Z",
    //                     "promoted_at": "2023-10-05T11:32:01Z",
    //                     "width": 3610,
    //                     "height": 5415,
    //                     "color": "#40400c",
    //                     "blur_hash": "L58|h94r4o~V4n%L_14p-;RjD+%L",
    //                     "description": null,
    //                     "alt_description": "a plant in a room with a mirror on the wall",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695236195484-f677b3085aea"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/a-plant-in-a-room-with-a-mirror-on-the-wall--X9fQQSTq-0",
    //                         "html": "https://unsplash.com/photos/a-plant-in-a-room-with-a-mirror-on-the-wall--X9fQQSTq-0",
    //                         "download": "https://unsplash.com/photos/-X9fQQSTq-0/download",
    //                         "download_location": "https://api.unsplash.com/photos/-X9fQQSTq-0/download"
    //                     },
    //                     "likes": 42,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "user": {
    //                         "id": "XVWYT60onkQ",
    //                         "updated_at": "2023-10-07T12:50:14Z",
    //                         "username": "mono_log",
    //                         "name": "mono-log",
    //                         "first_name": "mono-log",
    //                         "last_name": null,
    //                         "twitter_username": null,
    //                         "portfolio_url": "https://monoscorner.picfair.com",
    //                         "bio": "plastic ",
    //                         "location": "Swiss",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/mono_log",
    //                             "html": "https://unsplash.com/@mono_log",
    //                             "photos": "https://api.unsplash.com/users/mono_log/photos",
    //                             "likes": "https://api.unsplash.com/users/mono_log/likes",
    //                             "portfolio": "https://api.unsplash.com/users/mono_log/portfolio",
    //                             "following": "https://api.unsplash.com/users/mono_log/following",
    //                             "followers": "https://api.unsplash.com/users/mono_log/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1664295563780-94b6ec620010image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1664295563780-94b6ec620010image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1664295563780-94b6ec620010image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "m0n0_l0g_",
    //                         "total_collections": 4,
    //                         "total_likes": 89,
    //                         "total_photos": 1041,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "m0n0_l0g_",
    //                             "portfolio_url": "https://monoscorner.picfair.com",
    //                             "twitter_username": null,
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 },
    //                 "preview_photos": [
    //                     {
    //                         "id": "-X9fQQSTq-0",
    //                         "slug": "a-plant-in-a-room-with-a-mirror-on-the-wall--X9fQQSTq-0",
    //                         "created_at": "2023-09-20T18:58:42Z",
    //                         "updated_at": "2023-10-08T00:29:51Z",
    //                         "blur_hash": "L58|h94r4o~V4n%L_14p-;RjD+%L",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1695236195484-f677b3085aea?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695236195484-f677b3085aea"
    //                         }
    //                     },
    //                     {
    //                         "id": "pAj12xiky1k",
    //                         "slug": "a-large-body-of-water-with-waves-on-it-pAj12xiky1k",
    //                         "created_at": "2023-10-03T09:39:29Z",
    //                         "updated_at": "2023-10-08T05:36:43Z",
    //                         "blur_hash": "L79QaGs:ITWV~WofWBjtIot6ofjs",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1696325957611-99d5a56cde2b?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1696325957611-99d5a56cde2b?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1696325957611-99d5a56cde2b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1696325957611-99d5a56cde2b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1696325957611-99d5a56cde2b?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1696325957611-99d5a56cde2b"
    //                         }
    //                     },
    //                     {
    //                         "id": "YhZt03_OJKs",
    //                         "slug": "YhZt03_OJKs",
    //                         "created_at": "2019-08-25T11:29:43Z",
    //                         "updated_at": "2023-10-08T00:14:43Z",
    //                         "blur_hash": "L~J[bKxuRQj[~XofWUj[%MRjogj[",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1566732500818-d76031ac0421?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1566732500818-d76031ac0421?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1566732500818-d76031ac0421?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1566732500818-d76031ac0421?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1566732500818-d76031ac0421?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1566732500818-d76031ac0421"
    //                         }
    //                     },
    //                     {
    //                         "id": "biWIhjjgSDM",
    //                         "slug": "a-foggy-field-with-a-lone-tree-in-the-distance-biWIhjjgSDM",
    //                         "created_at": "2023-09-12T11:15:39Z",
    //                         "updated_at": "2023-10-08T01:39:01Z",
    //                         "blur_hash": "L#I}z{ofe.WV~qj[axj[I]afWCoe",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1694517112518-3a355d01cc80?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1694517112518-3a355d01cc80?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1694517112518-3a355d01cc80?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1694517112518-3a355d01cc80?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1694517112518-3a355d01cc80?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694517112518-3a355d01cc80"
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "en4Ez4KBrK4",
    //                 "title": "Home",
    //                 "description": null,
    //                 "published_at": "2023-05-22T11:19:24Z",
    //                 "last_collected_at": "2023-09-23T21:34:13Z",
    //                 "updated_at": "2023-09-23T21:34:13Z",
    //                 "featured": false,
    //                 "total_photos": 25,
    //                 "private": false,
    //                 "share_key": "e57f1ef2f6ee35198c1948d4f468a633",
    //                 "tags": [
    //                     {
    //                         "type": "search",
    //                         "title": "home"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "table à manger"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "table"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "meuble"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "dessus de la table"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "à l'intérieur"
    //                     }
    //                 ],
    //                 "links": {
    //                     "self": "https://api.unsplash.com/collections/en4Ez4KBrK4",
    //                     "html": "https://unsplash.com/collections/en4Ez4KBrK4/home",
    //                     "photos": "https://api.unsplash.com/collections/en4Ez4KBrK4/photos",
    //                     "related": "https://api.unsplash.com/collections/en4Ez4KBrK4/related"
    //                 },
    //                 "user": {
    //                     "id": "bxONC1i7sRY",
    //                     "updated_at": "2023-10-08T04:09:42Z",
    //                     "username": "laptiteminimaliste",
    //                     "name": "Mélyna Côté",
    //                     "first_name": "Mélyna",
    //                     "last_name": "Côté",
    //                     "twitter_username": null,
    //                     "portfolio_url": "http://www.laptiteminimaliste.com",
    //                     "bio": "Products/commercial photos \r\nLifestyle photographer",
    //                     "location": "Montreal",
    //                     "links": {
    //                         "self": "https://api.unsplash.com/users/laptiteminimaliste",
    //                         "html": "https://unsplash.com/@laptiteminimaliste",
    //                         "photos": "https://api.unsplash.com/users/laptiteminimaliste/photos",
    //                         "likes": "https://api.unsplash.com/users/laptiteminimaliste/likes",
    //                         "portfolio": "https://api.unsplash.com/users/laptiteminimaliste/portfolio",
    //                         "following": "https://api.unsplash.com/users/laptiteminimaliste/following",
    //                         "followers": "https://api.unsplash.com/users/laptiteminimaliste/followers"
    //                     },
    //                     "profile_image": {
    //                         "small": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                         "medium": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                         "large": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                     },
    //                     "instagram_username": "melynacot_",
    //                     "total_collections": 6,
    //                     "total_likes": 1,
    //                     "total_photos": 62,
    //                     "accepted_tos": true,
    //                     "for_hire": true,
    //                     "social": {
    //                         "instagram_username": "melynacot_",
    //                         "portfolio_url": "http://www.laptiteminimaliste.com",
    //                         "twitter_username": null,
    //                         "paypal_email": null
    //                     }
    //                 },
    //                 "cover_photo": {
    //                     "id": "okpHez4hwq8",
    //                     "slug": "a-table-set-with-plates-and-wine-glasses-okpHez4hwq8",
    //                     "created_at": "2023-09-17T16:16:23Z",
    //                     "updated_at": "2023-10-07T16:37:23Z",
    //                     "promoted_at": null,
    //                     "width": 4000,
    //                     "height": 6000,
    //                     "color": "#f3f3f3",
    //                     "blur_hash": "LUKw%w4TD%o#?cD%M{tRx^M{IUay",
    //                     "description": null,
    //                     "alt_description": "a table set with plates and wine glasses",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694967336930-589ea6f2528f"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/a-table-set-with-plates-and-wine-glasses-okpHez4hwq8",
    //                         "html": "https://unsplash.com/photos/a-table-set-with-plates-and-wine-glasses-okpHez4hwq8",
    //                         "download": "https://unsplash.com/photos/okpHez4hwq8/download",
    //                         "download_location": "https://api.unsplash.com/photos/okpHez4hwq8/download"
    //                     },
    //                     "likes": 0,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "user": {
    //                         "id": "bxONC1i7sRY",
    //                         "updated_at": "2023-10-08T04:09:42Z",
    //                         "username": "laptiteminimaliste",
    //                         "name": "Mélyna Côté",
    //                         "first_name": "Mélyna",
    //                         "last_name": "Côté",
    //                         "twitter_username": null,
    //                         "portfolio_url": "http://www.laptiteminimaliste.com",
    //                         "bio": "Products/commercial photos \r\nLifestyle photographer",
    //                         "location": "Montreal",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/laptiteminimaliste",
    //                             "html": "https://unsplash.com/@laptiteminimaliste",
    //                             "photos": "https://api.unsplash.com/users/laptiteminimaliste/photos",
    //                             "likes": "https://api.unsplash.com/users/laptiteminimaliste/likes",
    //                             "portfolio": "https://api.unsplash.com/users/laptiteminimaliste/portfolio",
    //                             "following": "https://api.unsplash.com/users/laptiteminimaliste/following",
    //                             "followers": "https://api.unsplash.com/users/laptiteminimaliste/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "melynacot_",
    //                         "total_collections": 6,
    //                         "total_likes": 1,
    //                         "total_photos": 62,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "melynacot_",
    //                             "portfolio_url": "http://www.laptiteminimaliste.com",
    //                             "twitter_username": null,
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 },
    //                 "preview_photos": [
    //                     {
    //                         "id": "okpHez4hwq8",
    //                         "slug": "a-table-set-with-plates-and-wine-glasses-okpHez4hwq8",
    //                         "created_at": "2023-09-17T16:16:23Z",
    //                         "updated_at": "2023-10-07T16:37:23Z",
    //                         "blur_hash": "LUKw%w4TD%o#?cD%M{tRx^M{IUay",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1694967336930-589ea6f2528f?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694967336930-589ea6f2528f"
    //                         }
    //                     },
    //                     {
    //                         "id": "4MKsYG1cqpM",
    //                         "slug": "a-table-set-for-a-formal-dinner-with-wine-glasses-and-plates-4MKsYG1cqpM",
    //                         "created_at": "2023-09-17T16:16:23Z",
    //                         "updated_at": "2023-10-07T23:40:26Z",
    //                         "blur_hash": "LUK^$y-=%htR~qxvx]ogE1t7jtj[",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1694967336899-d6d8b08932bf?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1694967336899-d6d8b08932bf?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1694967336899-d6d8b08932bf?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1694967336899-d6d8b08932bf?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1694967336899-d6d8b08932bf?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694967336899-d6d8b08932bf"
    //                         }
    //                     },
    //                     {
    //                         "id": "qBg1WgGtVCU",
    //                         "slug": "a-dining-room-with-a-table-and-chairs-qBg1WgGtVCU",
    //                         "created_at": "2023-09-17T16:16:23Z",
    //                         "updated_at": "2023-10-07T18:39:10Z",
    //                         "blur_hash": "LcI59@%MkCM{~qt7R*WAE1RPWBfk",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1694967336919-707c84ebacf2?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1694967336919-707c84ebacf2?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1694967336919-707c84ebacf2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1694967336919-707c84ebacf2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1694967336919-707c84ebacf2?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694967336919-707c84ebacf2"
    //                         }
    //                     },
    //                     {
    //                         "id": "zeuJtC4-g1Q",
    //                         "slug": "a-dining-table-with-plates-and-utensils-on-it-zeuJtC4-g1Q",
    //                         "created_at": "2023-09-17T16:16:23Z",
    //                         "updated_at": "2023-10-08T00:36:06Z",
    //                         "blur_hash": "LdJ@:v?c%NWA~qx]tRWBD%oKaxay",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1694967336926-464982371527?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1694967336926-464982371527?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1694967336926-464982371527?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1694967336926-464982371527?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1694967336926-464982371527?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694967336926-464982371527"
    //                         }
    //                     }
    //                 ]
    //             },
    //             {
    //                 "id": "q8TiB3-hAxk",
    //                 "title": "dcrll",
    //                 "description": null,
    //                 "published_at": "2023-08-07T19:24:06Z",
    //                 "last_collected_at": "2023-10-04T18:21:30Z",
    //                 "updated_at": "2023-10-04T18:21:30Z",
    //                 "featured": false,
    //                 "total_photos": 10,
    //                 "private": false,
    //                 "share_key": "de976dd0d344cc40852b056f0727aa40",
    //                 "tags": [
    //                     {
    //                         "type": "search",
    //                         "title": "dcrll"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "mesa"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "mobiliário"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "mesa de jantar"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "dentro"
    //                     },
    //                     {
    //                         "type": "search",
    //                         "title": "cadeira"
    //                     }
    //                 ],
    //                 "links": {
    //                     "self": "https://api.unsplash.com/collections/q8TiB3-hAxk",
    //                     "html": "https://unsplash.com/collections/q8TiB3-hAxk/dcrll",
    //                     "photos": "https://api.unsplash.com/collections/q8TiB3-hAxk/photos",
    //                     "related": "https://api.unsplash.com/collections/q8TiB3-hAxk/related"
    //                 },
    //                 "user": {
    //                     "id": "VhTkaiq-OZQ",
    //                     "updated_at": "2023-08-07T19:24:07Z",
    //                     "username": "melissavigla",
    //                     "name": "Melissa Vigla",
    //                     "first_name": "Melissa",
    //                     "last_name": "Vigla",
    //                     "twitter_username": null,
    //                     "portfolio_url": null,
    //                     "bio": null,
    //                     "location": "Brasil",
    //                     "links": {
    //                         "self": "https://api.unsplash.com/users/melissavigla",
    //                         "html": "https://unsplash.com/@melissavigla",
    //                         "photos": "https://api.unsplash.com/users/melissavigla/photos",
    //                         "likes": "https://api.unsplash.com/users/melissavigla/likes",
    //                         "portfolio": "https://api.unsplash.com/users/melissavigla/portfolio",
    //                         "following": "https://api.unsplash.com/users/melissavigla/following",
    //                         "followers": "https://api.unsplash.com/users/melissavigla/followers"
    //                     },
    //                     "profile_image": {
    //                         "small": "https://images.unsplash.com/profile-1688061107585-e6a42f260e02image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                         "medium": "https://images.unsplash.com/profile-1688061107585-e6a42f260e02image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                         "large": "https://images.unsplash.com/profile-1688061107585-e6a42f260e02image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                     },
    //                     "instagram_username": null,
    //                     "total_collections": 1,
    //                     "total_likes": 346,
    //                     "total_photos": 0,
    //                     "accepted_tos": false,
    //                     "for_hire": false,
    //                     "social": {
    //                         "instagram_username": null,
    //                         "portfolio_url": null,
    //                         "twitter_username": null,
    //                         "paypal_email": null
    //                     }
    //                 },
    //                 "cover_photo": {
    //                     "id": "kz6hqA2mdhA",
    //                     "slug": "a-dining-room-with-a-table-and-chairs-kz6hqA2mdhA",
    //                     "created_at": "2023-06-21T18:02:59Z",
    //                     "updated_at": "2023-10-07T06:35:18Z",
    //                     "promoted_at": null,
    //                     "width": 4000,
    //                     "height": 6000,
    //                     "color": "#f3f3f3",
    //                     "blur_hash": "LzM@Gst7x]V@_Nj]bIWBV@aeWBof",
    //                     "description": null,
    //                     "alt_description": "a dining room with a table and chairs",
    //                     "breadcrumbs": [],
    //                     "urls": {
    //                         "raw": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3",
    //                         "full": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                         "regular": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                         "small": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                         "thumb": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                         "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687370439066-d90c8433f4d9"
    //                     },
    //                     "links": {
    //                         "self": "https://api.unsplash.com/photos/a-dining-room-with-a-table-and-chairs-kz6hqA2mdhA",
    //                         "html": "https://unsplash.com/photos/a-dining-room-with-a-table-and-chairs-kz6hqA2mdhA",
    //                         "download": "https://unsplash.com/photos/kz6hqA2mdhA/download",
    //                         "download_location": "https://api.unsplash.com/photos/kz6hqA2mdhA/download"
    //                     },
    //                     "likes": 2,
    //                     "liked_by_user": false,
    //                     "current_user_collections": [],
    //                     "sponsorship": null,
    //                     "topic_submissions": {},
    //                     "user": {
    //                         "id": "bxONC1i7sRY",
    //                         "updated_at": "2023-10-08T04:09:42Z",
    //                         "username": "laptiteminimaliste",
    //                         "name": "Mélyna Côté",
    //                         "first_name": "Mélyna",
    //                         "last_name": "Côté",
    //                         "twitter_username": null,
    //                         "portfolio_url": "http://www.laptiteminimaliste.com",
    //                         "bio": "Products/commercial photos \r\nLifestyle photographer",
    //                         "location": "Montreal",
    //                         "links": {
    //                             "self": "https://api.unsplash.com/users/laptiteminimaliste",
    //                             "html": "https://unsplash.com/@laptiteminimaliste",
    //                             "photos": "https://api.unsplash.com/users/laptiteminimaliste/photos",
    //                             "likes": "https://api.unsplash.com/users/laptiteminimaliste/likes",
    //                             "portfolio": "https://api.unsplash.com/users/laptiteminimaliste/portfolio",
    //                             "following": "https://api.unsplash.com/users/laptiteminimaliste/following",
    //                             "followers": "https://api.unsplash.com/users/laptiteminimaliste/followers"
    //                         },
    //                         "profile_image": {
    //                             "small": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
    //                             "medium": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
    //                             "large": "https://images.unsplash.com/profile-1684743534069-9fc71bee42f8?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
    //                         },
    //                         "instagram_username": "melynacot_",
    //                         "total_collections": 6,
    //                         "total_likes": 1,
    //                         "total_photos": 62,
    //                         "accepted_tos": true,
    //                         "for_hire": true,
    //                         "social": {
    //                             "instagram_username": "melynacot_",
    //                             "portfolio_url": "http://www.laptiteminimaliste.com",
    //                             "twitter_username": null,
    //                             "paypal_email": null
    //                         }
    //                     }
    //                 },
    //                 "preview_photos": [
    //                     {
    //                         "id": "kz6hqA2mdhA",
    //                         "slug": "a-dining-room-with-a-table-and-chairs-kz6hqA2mdhA",
    //                         "created_at": "2023-06-21T18:02:59Z",
    //                         "updated_at": "2023-10-07T06:35:18Z",
    //                         "blur_hash": "LzM@Gst7x]V@_Nj]bIWBV@aeWBof",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1687370439066-d90c8433f4d9?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687370439066-d90c8433f4d9"
    //                         }
    //                     },
    //                     {
    //                         "id": "_SPhQ1LVOFk",
    //                         "slug": "a-dining-room-table-with-a-christmas-tree-in-the-corner-_SPhQ1LVOFk",
    //                         "created_at": "2023-06-21T18:02:59Z",
    //                         "updated_at": "2023-10-07T11:38:18Z",
    //                         "blur_hash": "L-NASD%gRiWA_Nt8aej@Rjaej[j[",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1687370439151-b59deb97608c?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1687370439151-b59deb97608c"
    //                         }
    //                     },
    //                     {
    //                         "id": "DE0iZnFyqhY",
    //                         "slug": "DE0iZnFyqhY",
    //                         "created_at": "2021-03-12T20:15:32Z",
    //                         "updated_at": "2023-10-08T05:17:40Z",
    //                         "blur_hash": "LTGlky_NM_IU$yjYMxf6_3f,ofWC",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1615580022686-dd5c1d065b95?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1615580022686-dd5c1d065b95?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1615580022686-dd5c1d065b95?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1615580022686-dd5c1d065b95?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1615580022686-dd5c1d065b95?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1615580022686-dd5c1d065b95"
    //                         }
    //                     },
    //                     {
    //                         "id": "OBjqQ90UYXM",
    //                         "slug": "OBjqQ90UYXM",
    //                         "created_at": "2021-05-19T10:41:33Z",
    //                         "updated_at": "2023-10-07T23:44:12Z",
    //                         "blur_hash": "LHJ@|68_E,4m~pwtni9FQ+%1IV%g",
    //                         "urls": {
    //                             "raw": "https://images.unsplash.com/photo-1621420622662-0c60462b1499?ixlib=rb-4.0.3",
    //                             "full": "https://images.unsplash.com/photo-1621420622662-0c60462b1499?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb",
    //                             "regular": "https://images.unsplash.com/photo-1621420622662-0c60462b1499?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
    //                             "small": "https://images.unsplash.com/photo-1621420622662-0c60462b1499?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
    //                             "thumb": "https://images.unsplash.com/photo-1621420622662-0c60462b1499?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max",
    //                             "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1621420622662-0c60462b1499"
    //                         }
    //                     }
    //                 ]
    //             }
    //         ]
    //     }
    // };




    return (
        <div className='min-h-[100vh] pt-[5rem] px-2 sm:px-6 py-8 space-y-2 '>

            {
                loading ? <Loader /> :

                    photodata ? <>
                        {/* Top Header  */}
                        <div className='flex items-center text-gray-500 justify-between text-xl px-6 py-2 shadow-lg rounded-sm'>

                            {/* User Details  */}
                            <div className=' flex items-center gap-2'>
                                <div>
                                    <div className='w-[3rem] h-[3rem]'>
                                        {
                                            photodata.user.profile_image.medium ? <img src={photodata.user.profile_image.medium} alt={photodata.alt_description} className='w-full h-full rounded-full border-2' /> : <BiSolidUserCircle />
                                        }
                                    </div>
                                </div>

                                <div>
                                    <h1 className='text-sm sm:text-lg font-semibold line-clamp-1'>{`${photodata.user.first_name} ${photodata.user.last_name}`}</h1>
                                    <p className='max-w-[40%] line-clamp-1 text-sm'>{photodata.user.bio}</p>
                                </div>
                            </div>

                            {/* Photo Details and Download  */}
                            <div className='flex items-center gap-4'>
                                <span className='hidden sm:flex items-center gap-1 '>
                                    <figure className=''>
                                        <FcLike />
                                    </figure>
                                    <p>{photodata.likes}</p>
                                </span>
                                <span className='hidden sm:flex items-center gap-1 '>
                                    <figure className=''>
                                        <BsFillFileArrowDownFill />
                                    </figure>
                                    <p>{photodata.downloads}</p>
                                </span>

                                {/* Download Button  */}
                                <button className='text-lg  w-max text-white border-2 border-green-500 p-2 rounded-sm hover:text-black font-semibold bg-green-500 hover:bg-transparent transition-all duration-300'>
                                    <a href={`${photodata.links.download}&amp;force=true`} download='unsplash_photo.jpg' t >
                                        <span> <BsDownload /></span>
                                    </a>
                                </button>
                            </div>

                        </div>


                        {/* Photo View  */}
                        <div className='max-w-full h-[75vh] px-2 py-2 flex items-center justify-center
                        '>
                            <img src={photodata.urls.full} alt={photodata.alt_description} className='max-w-full object-contain h-full  rounded-xl' />
                        </div>

                        {/* Photo Details  */}
                        <div className='px-4 py-2 shadow-lg space-y-8'>


                            {/* Views Likes Download and Share Button  */}
                            <section className='flex flex-col sm:flex-row sm:items-center justify-between gap-10'>

                                {/* Views Likes Download */}
                                <div className='flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-16'>
                                    <div className='flex sm:flex-col items-center sm:items-start justify-between'>
                                        <span className=' text-lg font-medium text-gray-500'>Views:</span>
                                        <span className='text-sm text-black'>{photodata.views}</span>
                                    </div>
                                    <div className='flex sm:flex-col items-center sm:items-start justify-between'>
                                        <span className=' text-lg font-medium text-gray-500'>Likes:</span>
                                        <span className='text-sm text-black'>{photodata.likes}</span>
                                    </div>
                                    <div className='flex sm:flex-col items-center sm:items-start justify-between'>
                                        <span className=' text-lg font-medium text-gray-500'>Downloads:</span>
                                        <span className='text-sm text-black'>{photodata.downloads}</span>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className='relative flex gap-2 items-center justify-between'>

                                    {/* Share PopUp  */}
                                    <Share photodata={photodata} shareOpen={shareOpen} setShareOpen={setShareOpen} shareDropUpRef={shareDropUpRef} />

                                    {/* Share Button  */}
                                    <button ref={shareDropUpRef} className='text-sm w-max flex items-center gap-1 border-2 p-2 rounded-sm hover:border-gray-500 transition-all duration-300' onClick={() => setShareOpen(!shareOpen)}>
                                        <AiOutlineShareAlt />
                                        <span> Share</span>
                                    </button>

                                    {/* Download Button  */}
                                    <button className='text-lg  w-max text-white border-2 border-green-500 p-2 rounded-sm hover:text-black font-semibold bg-green-500 hover:bg-transparent transition-all duration-300'>
                                        <a href={`${photodata.links.download}&amp;force=true`} download='unsplash_photo.jpg' t >
                                            <span> <BsDownload /></span>
                                        </a>
                                    </button>

                                </div>

                            </section>


                            {/* Location  */}
                            <div className=' flex flex-col gap-2'>

                                {photodata.location.name && <p className='flex items-center gap-2'>
                                    <AiOutlineShareAlt />
                                    <span> {photodata.location.name}</span>
                                </p>}


                                {photodata.location.city && <p className='flex items-center gap-2'>
                                    <BiSolidCity />
                                    <span> {photodata.location.city}</span>
                                </p>}

                                {photodata.location.country && <p className='flex items-center gap-2'>
                                    <AiOutlineGlobal />
                                    <span> {photodata.location.country}</span>
                                </p>}

                            </div>


                            {/* Tags */}
                            <div className='flex items-center flex-wrap gap-4 py-4'>

                                {
                                    photodata.tags && photodata.tags.map((tag, index) => (
                                        <div key={index} className='bg-gray-200 p-1 rounded-md'>{tag.type}</div>
                                    ))
                                }

                            </div>


                            {/* Related Photos  */}
                            <div className='sm:px-6 py-10 '>

                                <h1 className=' text-gray-500 text-2xl font-bold py-4'>Related Photos</h1>

                                {
                                    photodata.related_collections.results && photodata.related_collections.results.length > 0 ?

                                        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 '>
                                            {
                                                photodata.related_collections.results.map((item, index) => (

                                                    <Link key={index} to={`/photo/${item.cover_photo.id}`}>

                                                        <div className='w-full h-[25rem] shadow-lg group overflow-hidden rounded-xl'>
                                                            <img src={item.cover_photo.urls.full} alt={item.title} className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' />
                                                        </div>

                                                    </Link >
                                                ))
                                            }
                                        </div>


                                        : <div className='min-h-[25vh] flex items-center justify-center '>
                                            <p className='text-xl font-bold'>No Related Photos</p>
                                        </div>
                                }
                            </div>

                        </div>

                    </> : <div className='min-h-[25vh] flex items-center justify-center '>
                        <p className='text-xl font-bold'>No Photo</p>
                    </div>

            }

        </div >
    );
};

export default PhotoDetails;