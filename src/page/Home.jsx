import React, { useEffect } from 'react';
import PhotoCard from '../components/PhotoCard';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../components/Loader';
import homeBackground from "../assets/bg2.jpg";
import { getRandomPhotos } from '../redux/action';


const Home = () => {

    const res = [
        {
            "id": "rpryWTMTcSc",
            "slug": "rpryWTMTcSc",
            "created_at": "2023-06-12T14:24:01Z",
            "updated_at": "2023-10-07T12:37:40Z",
            "promoted_at": "2023-09-19T12:40:01Z",
            "width": 6048,
            "height": 4024,
            "color": "#d9d9d9",
            "blur_hash": "LqF$neITIUa$_NM_RiWB-qazayRj",
            "description": "Simmental",
            "alt_description": "a small lake surrounded by green hills and yellow flowers",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1686579809662-829e8374d0a8?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1686579809662-829e8374d0a8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1686579809662-829e8374d0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1686579809662-829e8374d0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1686579809662-829e8374d0a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1686579809662-829e8374d0a8"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/rpryWTMTcSc",
                "html": "https://unsplash.com/photos/rpryWTMTcSc",
                "download": "https://unsplash.com/photos/rpryWTMTcSc/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/rpryWTMTcSc/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 161,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "nature": {
                    "status": "approved",
                    "approved_on": "2023-09-26T09:54:15Z"
                },
                "wallpapers": {
                    "status": "approved",
                    "approved_on": "2023-09-28T19:04:59Z"
                }
            },
            "user": {
                "id": "KestroS_dps",
                "updated_at": "2023-10-07T03:20:01Z",
                "username": "liviaphotographs",
                "name": "Livia",
                "first_name": "Livia",
                "last_name": null,
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "/ Swiss Mountain Girl 🇨🇭\r\n/ Hiking & Travelling 🚶🏻‍♀️🌍",
                "location": "Switzerland",
                "links": {
                    "self": "https://api.unsplash.com/users/liviaphotographs",
                    "html": "https://unsplash.com/@liviaphotographs",
                    "photos": "https://api.unsplash.com/users/liviaphotographs/photos",
                    "likes": "https://api.unsplash.com/users/liviaphotographs/likes",
                    "portfolio": "https://api.unsplash.com/users/liviaphotographs/portfolio",
                    "following": "https://api.unsplash.com/users/liviaphotographs/following",
                    "followers": "https://api.unsplash.com/users/liviaphotographs/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-fb-1686579715-21fc18e6d2d2.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-fb-1686579715-21fc18e6d2d2.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-fb-1686579715-21fc18e6d2d2.jpg?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "liviaphotographs",
                "total_collections": 0,
                "total_likes": 7,
                "total_photos": 12,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "liviaphotographs",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "NIKON CORPORATION",
                "model": "NIKON Z 6",
                "name": "NIKON CORPORATION, NIKON Z 6",
                "exposure_time": "1/1250",
                "aperture": "2.8",
                "focal_length": "14.0",
                "iso": 125
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 529398,
            "downloads": 14783
        },
        {
            "id": "h97M2ww_Ulo",
            "slug": "an-aerial-view-of-a-lake-surrounded-by-mountains-h97M2ww_Ulo",
            "created_at": "2023-08-31T14:16:57Z",
            "updated_at": "2023-10-06T23:36:54Z",
            "promoted_at": "2023-10-01T11:00:01Z",
            "width": 7409,
            "height": 5209,
            "color": "#0c2640",
            "blur_hash": "LlFYryaeNeR-_4jZj[j[.8a}oJoJ",
            "description": null,
            "alt_description": "an aerial view of a lake surrounded by mountains",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1693491228225-0095ad2672d8?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1693491228225-0095ad2672d8?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1693491228225-0095ad2672d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1693491228225-0095ad2672d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1693491228225-0095ad2672d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693491228225-0095ad2672d8"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/an-aerial-view-of-a-lake-surrounded-by-mountains-h97M2ww_Ulo",
                "html": "https://unsplash.com/photos/an-aerial-view-of-a-lake-surrounded-by-mountains-h97M2ww_Ulo",
                "download": "https://unsplash.com/photos/h97M2ww_Ulo/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/h97M2ww_Ulo/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 54,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "nTOCTRi5GnU",
                "updated_at": "2023-10-07T11:31:51Z",
                "username": "spensersembrat",
                "name": "Spenser Sembrat",
                "first_name": "Spenser",
                "last_name": "Sembrat",
                "twitter_username": "spensersembrat",
                "portfolio_url": "https://www.spensersembrat.com",
                "bio": "Learning the art of adventure 🌿 | Instagram @spensersembrat",
                "location": "Worldwide",
                "links": {
                    "self": "https://api.unsplash.com/users/spensersembrat",
                    "html": "https://unsplash.com/@spensersembrat",
                    "photos": "https://api.unsplash.com/users/spensersembrat/photos",
                    "likes": "https://api.unsplash.com/users/spensersembrat/likes",
                    "portfolio": "https://api.unsplash.com/users/spensersembrat/portfolio",
                    "following": "https://api.unsplash.com/users/spensersembrat/following",
                    "followers": "https://api.unsplash.com/users/spensersembrat/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1682595282019-acc650a266bdimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1682595282019-acc650a266bdimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1682595282019-acc650a266bdimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "spensersembrat",
                "total_collections": 11,
                "total_likes": 1674,
                "total_photos": 682,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "spensersembrat",
                    "portfolio_url": "https://www.spensersembrat.com",
                    "twitter_username": "spensersembrat",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "DJI",
                "model": "FC8282",
                "name": "DJI, FC8282",
                "exposure_time": "1/400",
                "aperture": "1.7",
                "focal_length": "6.7",
                "iso": 180
            },
            "location": {
                "name": "Bláhylur, Iceland",
                "city": null,
                "country": "Iceland",
                "position": {
                    "latitude": 64.051827,
                    "longitude": -19.031271
                }
            },
            "views": 447005,
            "downloads": 4801
        },
        {
            "id": "gF77cdVcayk",
            "slug": "a-black-and-white-photo-of-a-building-gF77cdVcayk",
            "created_at": "2023-09-04T12:18:07Z",
            "updated_at": "2023-10-07T04:37:20Z",
            "promoted_at": "2023-09-13T08:16:02Z",
            "width": 5930,
            "height": 3836,
            "color": "#262626",
            "blur_hash": "L8Dvfyt7%MxuofM{xu-;-;?b~qRj",
            "description": null,
            "alt_description": "a black and white photo of a building",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1693829754868-075929cec77a?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1693829754868-075929cec77a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1693829754868-075929cec77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1693829754868-075929cec77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1693829754868-075929cec77a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693829754868-075929cec77a"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-black-and-white-photo-of-a-building-gF77cdVcayk",
                "html": "https://unsplash.com/photos/a-black-and-white-photo-of-a-building-gF77cdVcayk",
                "download": "https://unsplash.com/photos/gF77cdVcayk/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/gF77cdVcayk/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 37,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "1_66bJDhPMc",
                "updated_at": "2023-09-30T09:51:27Z",
                "username": "nomyfan",
                "name": "Kim Chan",
                "first_name": "Kim",
                "last_name": "Chan",
                "twitter_username": "nomyfan",
                "portfolio_url": "https://hi.callcc.dev",
                "bio": "Stay hungry, stay foolish.",
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/nomyfan",
                    "html": "https://unsplash.com/@nomyfan",
                    "photos": "https://api.unsplash.com/users/nomyfan/photos",
                    "likes": "https://api.unsplash.com/users/nomyfan/likes",
                    "portfolio": "https://api.unsplash.com/users/nomyfan/portfolio",
                    "following": "https://api.unsplash.com/users/nomyfan/following",
                    "followers": "https://api.unsplash.com/users/nomyfan/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1605319994562-a80850376f5bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1605319994562-a80850376f5bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1605319994562-a80850376f5bimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "nomyfan_",
                "total_collections": 0,
                "total_likes": 9,
                "total_photos": 29,
                "accepted_tos": true,
                "for_hire": false,
                "social": {
                    "instagram_username": "nomyfan_",
                    "portfolio_url": "https://hi.callcc.dev",
                    "twitter_username": "nomyfan",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "NIKON CORPORATION",
                "model": "NIKON Z 6_2",
                "name": "NIKON CORPORATION, NIKON Z 6_2",
                "exposure_time": "1/160",
                "aperture": "6.3",
                "focal_length": "150.0",
                "iso": 180
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 292000,
            "downloads": 4418
        },
        {
            "id": "n80w1Unud_Y",
            "slug": "a-black-and-white-photo-of-a-man-in-a-shirt-n80w1Unud_Y",
            "created_at": "2023-09-04T16:58:34Z",
            "updated_at": "2023-10-06T20:36:50Z",
            "promoted_at": "2023-09-08T13:00:01Z",
            "width": 3132,
            "height": 4097,
            "color": "#737373",
            "blur_hash": "LKGSDg~q?bxuIUD%M{t79F9FM{j[",
            "description": "Ilya",
            "alt_description": "a black and white photo of a man in a shirt",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1693846697103-48ccc757f9b9?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1693846697103-48ccc757f9b9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1693846697103-48ccc757f9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1693846697103-48ccc757f9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1693846697103-48ccc757f9b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693846697103-48ccc757f9b9"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-black-and-white-photo-of-a-man-in-a-shirt-n80w1Unud_Y",
                "html": "https://unsplash.com/photos/a-black-and-white-photo-of-a-man-in-a-shirt-n80w1Unud_Y",
                "download": "https://unsplash.com/photos/n80w1Unud_Y/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/n80w1Unud_Y/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 20,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "Im64lhSaUxo",
                "updated_at": "2023-10-03T13:48:13Z",
                "username": "phaybin",
                "name": "Nataliia Rabinovych",
                "first_name": "Nataliia",
                "last_name": "Rabinovych",
                "twitter_username": null,
                "portfolio_url": "https://phaybin.com/",
                "bio": "Portrait photography, fashion photo \r\n 🪄 Photographer Israel  🪄 Fashion 🪄 Love story  🪄 Family photo  🪄 walking photo    ",
                "location": "Israel ",
                "links": {
                    "self": "https://api.unsplash.com/users/phaybin",
                    "html": "https://unsplash.com/@phaybin",
                    "photos": "https://api.unsplash.com/users/phaybin/photos",
                    "likes": "https://api.unsplash.com/users/phaybin/likes",
                    "portfolio": "https://api.unsplash.com/users/phaybin/portfolio",
                    "following": "https://api.unsplash.com/users/phaybin/following",
                    "followers": "https://api.unsplash.com/users/phaybin/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1645165150910-2e7ee858be13?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1645165150910-2e7ee858be13?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1645165150910-2e7ee858be13?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "phaybin.photo",
                "total_collections": 0,
                "total_likes": 77,
                "total_photos": 159,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "phaybin.photo",
                    "portfolio_url": "https://phaybin.com/",
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": null,
                "model": null,
                "name": null,
                "exposure_time": null,
                "aperture": null,
                "focal_length": null,
                "iso": null
            },
            "location": {
                "name": "Израиль, Израиль",
                "city": null,
                "country": "Израиль",
                "position": {
                    "latitude": 32.0740331,
                    "longitude": 34.7753658
                }
            },
            "views": 321331,
            "downloads": 2239
        },
        {
            "id": "9cuLlSBwRvg",
            "slug": "a-couple-of-people-standing-on-top-of-a-van-9cuLlSBwRvg",
            "created_at": "2023-09-05T05:38:27Z",
            "updated_at": "2023-10-07T07:37:18Z",
            "promoted_at": "2023-09-14T10:56:01Z",
            "width": 5486,
            "height": 3561,
            "color": "#735959",
            "blur_hash": "LSEeMn={$$s.%NbIR+a}0#IqR+WW",
            "description": null,
            "alt_description": "a couple of people standing on top of a van",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1693892256532-fa0ee2ffd010?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1693892256532-fa0ee2ffd010?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1693892256532-fa0ee2ffd010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1693892256532-fa0ee2ffd010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1693892256532-fa0ee2ffd010?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1693892256532-fa0ee2ffd010"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-van-9cuLlSBwRvg",
                "html": "https://unsplash.com/photos/a-couple-of-people-standing-on-top-of-a-van-9cuLlSBwRvg",
                "download": "https://unsplash.com/photos/9cuLlSBwRvg/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/9cuLlSBwRvg/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 36,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "5yrKvk3H6r4",
                "updated_at": "2023-10-07T12:10:14Z",
                "username": "leo_visions_",
                "name": "Leo",
                "first_name": "Leo",
                "last_name": null,
                "twitter_username": "stephenleo1982",
                "portfolio_url": "https://linktr.ee/stephenleo1982",
                "bio": "ig  @Leo_Visions_   \r\n PayPal   stephenleo1982@gmail.com  ..Thank you :)",
                "location": "Sacramento ,  NORTHERN CALIFORNIA ",
                "links": {
                    "self": "https://api.unsplash.com/users/leo_visions_",
                    "html": "https://unsplash.com/@leo_visions_",
                    "photos": "https://api.unsplash.com/users/leo_visions_/photos",
                    "likes": "https://api.unsplash.com/users/leo_visions_/likes",
                    "portfolio": "https://api.unsplash.com/users/leo_visions_/portfolio",
                    "following": "https://api.unsplash.com/users/leo_visions_/following",
                    "followers": "https://api.unsplash.com/users/leo_visions_/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1694831856987-7118049ed7c3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1694831856987-7118049ed7c3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1694831856987-7118049ed7c3image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "Leo_visions_",
                "total_collections": 1,
                "total_likes": 24,
                "total_photos": 8225,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "Leo_visions_",
                    "portfolio_url": "https://linktr.ee/stephenleo1982",
                    "twitter_username": "stephenleo1982",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "Canon",
                "model": " EOS R3",
                "name": "Canon, EOS R3",
                "exposure_time": "1/160",
                "aperture": "3.2",
                "focal_length": "89.0",
                "iso": 2000
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 362434,
            "downloads": 3793
        },
        {
            "id": "hzzPleDKQx8",
            "slug": "a-bicycle-parked-in-front-of-a-building-hzzPleDKQx8",
            "created_at": "2023-09-11T02:22:16Z",
            "updated_at": "2023-10-07T06:36:50Z",
            "promoted_at": "2023-09-11T08:00:01Z",
            "width": 6000,
            "height": 4000,
            "color": "#c0c0a6",
            "blur_hash": "LMGIJwkC%M%M~pWBt7xu4:WBbHay",
            "description": null,
            "alt_description": "a bicycle parked in front of a building",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1694398791797-5cdbb6f234dc?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1694398791797-5cdbb6f234dc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1694398791797-5cdbb6f234dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1694398791797-5cdbb6f234dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1694398791797-5cdbb6f234dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694398791797-5cdbb6f234dc"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-bicycle-parked-in-front-of-a-building-hzzPleDKQx8",
                "html": "https://unsplash.com/photos/a-bicycle-parked-in-front-of-a-building-hzzPleDKQx8",
                "download": "https://unsplash.com/photos/hzzPleDKQx8/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/hzzPleDKQx8/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 12,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "8SNfoTKH5Ow",
                "updated_at": "2023-10-03T04:30:35Z",
                "username": "abduzeedo",
                "name": "Fabio Sasso",
                "first_name": "Fabio",
                "last_name": "Sasso",
                "twitter_username": "abduzeedo",
                "portfolio_url": "http://abduzeedo.com/",
                "bio": "Designer, founder of Abduzeedo and photography enthusiast.",
                "location": "Oakland",
                "links": {
                    "self": "https://api.unsplash.com/users/abduzeedo",
                    "html": "https://unsplash.com/@abduzeedo",
                    "photos": "https://api.unsplash.com/users/abduzeedo/photos",
                    "likes": "https://api.unsplash.com/users/abduzeedo/likes",
                    "portfolio": "https://api.unsplash.com/users/abduzeedo/portfolio",
                    "following": "https://api.unsplash.com/users/abduzeedo/following",
                    "followers": "https://api.unsplash.com/users/abduzeedo/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1464886736251-2553e3a733bc?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1464886736251-2553e3a733bc?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1464886736251-2553e3a733bc?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "abduzeedo",
                "total_collections": 7,
                "total_likes": 5,
                "total_photos": 170,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "abduzeedo",
                    "portfolio_url": "http://abduzeedo.com/",
                    "twitter_username": "abduzeedo",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "SONY",
                "model": "ILCE-7M3",
                "name": "SONY, ILCE-7M3",
                "exposure_time": "1/2000",
                "aperture": "4.5",
                "focal_length": "39.0",
                "iso": 100
            },
            "location": {
                "name": "Óbidos, Portugal",
                "city": "Óbidos",
                "country": "Portugal",
                "position": {
                    "latitude": 39.360421,
                    "longitude": -9.158201
                }
            },
            "views": 228844,
            "downloads": 3902
        },
        {
            "id": "TLOII3p-rvA",
            "slug": "a-dirt-road-in-the-middle-of-a-mountain-range-TLOII3p-rvA",
            "created_at": "2023-09-15T20:54:37Z",
            "updated_at": "2023-10-06T22:36:19Z",
            "promoted_at": "2023-09-26T07:24:01Z",
            "width": 6336,
            "height": 9520,
            "color": "#8c7359",
            "blur_hash": "LPJ7w4%M4pV@L4WY%0WBpdn#V@Rk",
            "description": "Stairway to Mars",
            "alt_description": "a dirt road in the middle of a mountain range",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1694802491008-a528234a9a2d?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1694802491008-a528234a9a2d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1694802491008-a528234a9a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1694802491008-a528234a9a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1694802491008-a528234a9a2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1694802491008-a528234a9a2d"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-dirt-road-in-the-middle-of-a-mountain-range-TLOII3p-rvA",
                "html": "https://unsplash.com/photos/a-dirt-road-in-the-middle-of-a-mountain-range-TLOII3p-rvA",
                "download": "https://unsplash.com/photos/TLOII3p-rvA/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/TLOII3p-rvA/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 113,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {
                "nature": {
                    "status": "approved",
                    "approved_on": "2023-09-18T14:44:11Z"
                }
            },
            "user": {
                "id": "dg4S8j5TzmE",
                "updated_at": "2023-10-07T04:51:44Z",
                "username": "karsten116",
                "name": "Karsten Winegeart",
                "first_name": "Karsten",
                "last_name": "Winegeart",
                "twitter_username": "karsten116",
                "portfolio_url": null,
                "bio": "IG - @karsten116",
                "location": "Austin Texas",
                "links": {
                    "self": "https://api.unsplash.com/users/karsten116",
                    "html": "https://unsplash.com/@karsten116",
                    "photos": "https://api.unsplash.com/users/karsten116/photos",
                    "likes": "https://api.unsplash.com/users/karsten116/likes",
                    "portfolio": "https://api.unsplash.com/users/karsten116/portfolio",
                    "following": "https://api.unsplash.com/users/karsten116/following",
                    "followers": "https://api.unsplash.com/users/karsten116/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1583427783052-3da8ceab5579image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "karsten116",
                "total_collections": 1,
                "total_likes": 667,
                "total_photos": 805,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "karsten116",
                    "portfolio_url": null,
                    "twitter_username": "karsten116",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "LEICA CAMERA AG",
                "model": "LEICA Q3",
                "name": "LEICA CAMERA AG, LEICA Q3",
                "exposure_time": "1/500",
                "aperture": "1.7",
                "focal_length": "28.0",
                "iso": 100
            },
            "location": {
                "name": "Kerlingarfjöll, Iceland",
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 4396050,
            "downloads": 72853
        },
        {
            "id": "fg_MDbT5_d4",
            "slug": "a-sail-boat-in-the-middle-of-a-body-of-water-fg_MDbT5_d4",
            "created_at": "2023-09-19T08:37:05Z",
            "updated_at": "2023-10-07T08:37:40Z",
            "promoted_at": "2023-09-22T18:40:01Z",
            "width": 4488,
            "height": 6732,
            "color": "#d9d9d9",
            "blur_hash": "LwMQV4IVj[ay~qafazfkNyayfQjt",
            "description": null,
            "alt_description": "a sail boat in the middle of a body of water",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1695112178026-a2384ed26276?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1695112178026-a2384ed26276?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1695112178026-a2384ed26276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1695112178026-a2384ed26276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1695112178026-a2384ed26276?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695112178026-a2384ed26276"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-sail-boat-in-the-middle-of-a-body-of-water-fg_MDbT5_d4",
                "html": "https://unsplash.com/photos/a-sail-boat-in-the-middle-of-a-body-of-water-fg_MDbT5_d4",
                "download": "https://unsplash.com/photos/fg_MDbT5_d4/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/fg_MDbT5_d4/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 88,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "iK0nCZoWyNY",
                "updated_at": "2023-10-04T14:58:30Z",
                "username": "thehammockhermit",
                "name": "Kyle Mills",
                "first_name": "Kyle",
                "last_name": "Mills",
                "twitter_username": "KyleDAMills",
                "portfolio_url": "https://www.instagram.com/kyledamills",
                "bio": "Capturing moments and creating stories",
                "location": "South Africa",
                "links": {
                    "self": "https://api.unsplash.com/users/thehammockhermit",
                    "html": "https://unsplash.com/@thehammockhermit",
                    "photos": "https://api.unsplash.com/users/thehammockhermit/photos",
                    "likes": "https://api.unsplash.com/users/thehammockhermit/likes",
                    "portfolio": "https://api.unsplash.com/users/thehammockhermit/portfolio",
                    "following": "https://api.unsplash.com/users/thehammockhermit/following",
                    "followers": "https://api.unsplash.com/users/thehammockhermit/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1625574280513-8e5add01e7f1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1625574280513-8e5add01e7f1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1625574280513-8e5add01e7f1image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "TheHammockHermit",
                "total_collections": 1,
                "total_likes": 1,
                "total_photos": 130,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "TheHammockHermit",
                    "portfolio_url": "https://www.instagram.com/kyledamills",
                    "twitter_username": "KyleDAMills",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "Canon",
                "model": " EOS R7",
                "name": "Canon, EOS R7",
                "exposure_time": "1/320",
                "aperture": "3.2",
                "focal_length": "50.0",
                "iso": 100
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 315097,
            "downloads": 3458
        },
        {
            "id": "XEWFvXhikds",
            "slug": "a-group-of-people-standing-on-top-of-a-beach-next-to-the-ocean-XEWFvXhikds",
            "created_at": "2023-09-26T14:56:09Z",
            "updated_at": "2023-10-07T04:37:49Z",
            "promoted_at": "2023-10-02T14:00:01Z",
            "width": 3065,
            "height": 4569,
            "color": "#734026",
            "blur_hash": "LdDu9$t6Ips9-ToLR+ay0#RkxtSh",
            "description": null,
            "alt_description": "a group of people standing on top of a beach next to the ocean",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1695740022029-229ab3400d6d?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1695740022029-229ab3400d6d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1695740022029-229ab3400d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1695740022029-229ab3400d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1695740022029-229ab3400d6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695740022029-229ab3400d6d"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-group-of-people-standing-on-top-of-a-beach-next-to-the-ocean-XEWFvXhikds",
                "html": "https://unsplash.com/photos/a-group-of-people-standing-on-top-of-a-beach-next-to-the-ocean-XEWFvXhikds",
                "download": "https://unsplash.com/photos/XEWFvXhikds/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/XEWFvXhikds/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 22,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "WiHbZkjvrEU",
                "updated_at": "2023-10-07T14:05:17Z",
                "username": "robin_inizan",
                "name": "robin inizan",
                "first_name": "robin",
                "last_name": "inizan",
                "twitter_username": null,
                "portfolio_url": null,
                "bio": "Follow my work on Instagram : instagram.com/robin.inizan",
                "location": "France",
                "links": {
                    "self": "https://api.unsplash.com/users/robin_inizan",
                    "html": "https://unsplash.com/@robin_inizan",
                    "photos": "https://api.unsplash.com/users/robin_inizan/photos",
                    "likes": "https://api.unsplash.com/users/robin_inizan/likes",
                    "portfolio": "https://api.unsplash.com/users/robin_inizan/portfolio",
                    "following": "https://api.unsplash.com/users/robin_inizan/following",
                    "followers": "https://api.unsplash.com/users/robin_inizan/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1576800496937-781fff4f537fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1576800496937-781fff4f537fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1576800496937-781fff4f537fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "robin.inizan",
                "total_collections": 1,
                "total_likes": 24,
                "total_photos": 28,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "robin.inizan",
                    "portfolio_url": null,
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "Panasonic",
                "model": "DC-G9",
                "name": "Panasonic, DC-G9",
                "exposure_time": "1/6400",
                "aperture": "2.5",
                "focal_length": "25.0",
                "iso": 200
            },
            "location": {
                "name": "Quiberon, France",
                "city": "Quiberon",
                "country": "France",
                "position": {
                    "latitude": 47.482133,
                    "longitude": -3.121053
                }
            },
            "views": 214988,
            "downloads": 1850
        },
        {
            "id": "Ik0dtsFpsfc",
            "slug": "a-man-standing-next-to-a-boat-on-a-lake-Ik0dtsFpsfc",
            "created_at": "2023-09-28T17:02:36Z",
            "updated_at": "2023-10-06T17:40:31Z",
            "promoted_at": "2023-10-01T10:40:01Z",
            "width": 3924,
            "height": 5886,
            "color": "#d9d9f3",
            "blur_hash": "LcKe1WR%ozWB_NozM_j]RjRPRiRj",
            "description": null,
            "alt_description": "a man standing next to a boat on a lake",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1695918431822-871c78fac437?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1695918431822-871c78fac437?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1695918431822-871c78fac437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1695918431822-871c78fac437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1695918431822-871c78fac437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1695918431822-871c78fac437"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-man-standing-next-to-a-boat-on-a-lake-Ik0dtsFpsfc",
                "html": "https://unsplash.com/photos/a-man-standing-next-to-a-boat-on-a-lake-Ik0dtsFpsfc",
                "download": "https://unsplash.com/photos/Ik0dtsFpsfc/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/Ik0dtsFpsfc/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 44,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "Fofp0wFmyvo",
                "updated_at": "2023-10-06T10:16:01Z",
                "username": "adamcdav",
                "name": "Adam Davis",
                "first_name": "Adam",
                "last_name": "Davis",
                "twitter_username": null,
                "portfolio_url": "https://www.davisadam.com",
                "bio": "Lifestyle | Adventure\r\nPhotographer and Videographer",
                "location": "Des Moines, IA",
                "links": {
                    "self": "https://api.unsplash.com/users/adamcdav",
                    "html": "https://unsplash.com/@adamcdav",
                    "photos": "https://api.unsplash.com/users/adamcdav/photos",
                    "likes": "https://api.unsplash.com/users/adamcdav/likes",
                    "portfolio": "https://api.unsplash.com/users/adamcdav/portfolio",
                    "following": "https://api.unsplash.com/users/adamcdav/following",
                    "followers": "https://api.unsplash.com/users/adamcdav/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1689628634673-502a3022fd19image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1689628634673-502a3022fd19image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1689628634673-502a3022fd19image?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "adamdavphoto",
                "total_collections": 1,
                "total_likes": 2,
                "total_photos": 178,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "adamdavphoto",
                    "portfolio_url": "https://www.davisadam.com",
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "SONY",
                "model": "ILCE-7M3",
                "name": "SONY, ILCE-7M3",
                "exposure_time": "1/1250",
                "aperture": "2.8",
                "focal_length": "31.6",
                "iso": 400
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 246742,
            "downloads": 2441
        },
        {
            "id": "xsfXOy5ivgg",
            "slug": "a-woman-standing-in-front-of-a-tree-xsfXOy5ivgg",
            "created_at": "2023-10-04T02:20:37Z",
            "updated_at": "2023-10-07T07:37:57Z",
            "promoted_at": "2023-10-05T07:16:01Z",
            "width": 4558,
            "height": 6837,
            "color": "#0c260c",
            "blur_hash": "LQ8hRdkD8^oKDgWA%hofbxofn$WX",
            "description": null,
            "alt_description": "a woman standing in front of a tree",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1696385989343-0df3db3c70c7?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1696385989343-0df3db3c70c7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1696385989343-0df3db3c70c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1696385989343-0df3db3c70c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1696385989343-0df3db3c70c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1696385989343-0df3db3c70c7"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-woman-standing-in-front-of-a-tree-xsfXOy5ivgg",
                "html": "https://unsplash.com/photos/a-woman-standing-in-front-of-a-tree-xsfXOy5ivgg",
                "download": "https://unsplash.com/photos/xsfXOy5ivgg/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/xsfXOy5ivgg/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 28,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "ePlndXHeIiM",
                "updated_at": "2023-10-07T13:55:17Z",
                "username": "lwdzl",
                "name": "Jack Dong",
                "first_name": "Jack",
                "last_name": "Dong",
                "twitter_username": null,
                "portfolio_url": "https://www.xiaohongshu.com/user/profile/5f11b998000000000101d8d2?xhsshare=CopyLink&appuid=5f11b998000000000101d8d2&apptime=1696562673",
                "bio": null,
                "location": null,
                "links": {
                    "self": "https://api.unsplash.com/users/lwdzl",
                    "html": "https://unsplash.com/@lwdzl",
                    "photos": "https://api.unsplash.com/users/lwdzl/photos",
                    "likes": "https://api.unsplash.com/users/lwdzl/likes",
                    "portfolio": "https://api.unsplash.com/users/lwdzl/portfolio",
                    "following": "https://api.unsplash.com/users/lwdzl/following",
                    "followers": "https://api.unsplash.com/users/lwdzl/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1696563144074-80a8da44bcd4?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": null,
                "total_collections": 0,
                "total_likes": 89,
                "total_photos": 601,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": null,
                    "portfolio_url": "https://www.xiaohongshu.com/user/profile/5f11b998000000000101d8d2?xhsshare=CopyLink&appuid=5f11b998000000000101d8d2&apptime=1696562673",
                    "twitter_username": null,
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "SONY",
                "model": "ILCE-7M4",
                "name": "SONY, ILCE-7M4",
                "exposure_time": "1/400",
                "aperture": "3.2",
                "focal_length": "60.0",
                "iso": 100
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 153151,
            "downloads": 1593
        },
        {
            "id": "dIXt8Q81-wQ",
            "slug": "a-bunch-of-white-flowers-sitting-on-top-of-a-table-dIXt8Q81-wQ",
            "created_at": "2023-10-05T21:56:42Z",
            "updated_at": "2023-10-07T14:54:10Z",
            "promoted_at": "2023-10-06T15:40:01Z",
            "width": 4000,
            "height": 6000,
            "color": "#c0c0c0",
            "blur_hash": "L4L}HW_3TgNG3FIoMH%2$]WAx]Io",
            "description": "If You Like To Have The Exclusive Form Of These Types of Images In World Wide , You Just Need To Email Me And Ill Be There . 📥 For Cooperation 🤝 In Order To Coverart , Photo , Visiualizer , Lyric Video , Music Video Edit Send ●✉️Email ► : mahdi.visualcreators@gmail.com",
            "alt_description": "a bunch of white flowers sitting on top of a table",
            "breadcrumbs": [],
            "urls": {
                "raw": "https://images.unsplash.com/photo-1696532637253-0bf4329cd8be?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3",
                "full": "https://images.unsplash.com/photo-1696532637253-0bf4329cd8be?crop=entropy&cs=srgb&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=85",
                "regular": "https://images.unsplash.com/photo-1696532637253-0bf4329cd8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=1080",
                "small": "https://images.unsplash.com/photo-1696532637253-0bf4329cd8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=400",
                "thumb": "https://images.unsplash.com/photo-1696532637253-0bf4329cd8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8&ixlib=rb-4.0.3&q=80&w=200",
                "small_s3": "https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1696532637253-0bf4329cd8be"
            },
            "links": {
                "self": "https://api.unsplash.com/photos/a-bunch-of-white-flowers-sitting-on-top-of-a-table-dIXt8Q81-wQ",
                "html": "https://unsplash.com/photos/a-bunch-of-white-flowers-sitting-on-top-of-a-table-dIXt8Q81-wQ",
                "download": "https://unsplash.com/photos/dIXt8Q81-wQ/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8",
                "download_location": "https://api.unsplash.com/photos/dIXt8Q81-wQ/download?ixid=M3w1MTI2NzR8MHwxfHJhbmRvbXx8fHx8fHx8fDE2OTY2OTM5MTh8"
            },
            "likes": 17,
            "liked_by_user": false,
            "current_user_collections": [],
            "sponsorship": null,
            "topic_submissions": {},
            "user": {
                "id": "9BczVjn5vwc",
                "updated_at": "2023-10-07T12:27:37Z",
                "username": "mahdibafande",
                "name": "Mahdi Bafande",
                "first_name": "Mahdi",
                "last_name": "Bafande",
                "twitter_username": "mahdibafande",
                "portfolio_url": "https://www.youtube.com/@mahdi_bafande",
                "bio": "|Crow| Youre Welcome With Respect . Im a Member Of Visual Creators Family ",
                "location": "Middle Earth",
                "links": {
                    "self": "https://api.unsplash.com/users/mahdibafande",
                    "html": "https://unsplash.com/@mahdibafande",
                    "photos": "https://api.unsplash.com/users/mahdibafande/photos",
                    "likes": "https://api.unsplash.com/users/mahdibafande/likes",
                    "portfolio": "https://api.unsplash.com/users/mahdibafande/portfolio",
                    "following": "https://api.unsplash.com/users/mahdibafande/following",
                    "followers": "https://api.unsplash.com/users/mahdibafande/followers"
                },
                "profile_image": {
                    "small": "https://images.unsplash.com/profile-1696625502446-2d1a903df25fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=32&h=32",
                    "medium": "https://images.unsplash.com/profile-1696625502446-2d1a903df25fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=64&h=64",
                    "large": "https://images.unsplash.com/profile-1696625502446-2d1a903df25fimage?ixlib=rb-4.0.3&crop=faces&fit=crop&w=128&h=128"
                },
                "instagram_username": "mahdi_bafande",
                "total_collections": 42,
                "total_likes": 604,
                "total_photos": 1078,
                "accepted_tos": true,
                "for_hire": true,
                "social": {
                    "instagram_username": "mahdi_bafande",
                    "portfolio_url": "https://www.youtube.com/@mahdi_bafande",
                    "twitter_username": "mahdibafande",
                    "paypal_email": null
                }
            },
            "exif": {
                "make": "Canon",
                "model": " EOS 800D",
                "name": "Canon, EOS 800D",
                "exposure_time": "1/100",
                "aperture": "6.3",
                "focal_length": "35.0",
                "iso": 100
            },
            "location": {
                "name": null,
                "city": null,
                "country": null,
                "position": {
                    "latitude": 0,
                    "longitude": 0
                }
            },
            "views": 242483,
            "downloads": 889
        }
    ];

    // Header Background Inline Style 
    const headerBackgroundStyle = {
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    };

    const { loading, randomdata } = useSelector(state => state.photos);

    const dispatch = useDispatch();

    useEffect(() => {
        // dispatch(getRandomPhotos());
    }, [dispatch]);

    return (
        <div className='overflow-hidden'>

            <div style={headerBackgroundStyle} className='min-h-[75vh] flex items-center justify-center shadow-xl'>

                {/* Header Content  */}
                <div className='p-4 md:p-16 sm:w-[80%] space-y-2 md:space-y-4 lg:space-y-6'>
                    {/* Heading  */}

                    <p className='text-xl font-semibold text-white animate-slideLeft'>Welcome To</p>

                    <div className='animate-bounceUpDown'>
                        <h1 className='text-5xl sm:text-6xl font-extrabold text-white tracking-wider'>Image</h1>
                        <h1 className='text-5xl sm:text-6xl font-extrabold text-white tracking-wider'>Traverse</h1>
                    </div>

                    {/* Description  */}
                    <p className='sm:text-xl text-white font-medium animate-slideLeft'>ImageTraverse is your gateway to a vast and visually captivating universe. Explore, find, and be inspired with ImageTraverse.</p>

                </div>

            </div>

            {/* List of Random Photos */}
            <div>

                {
                    loading ? <Loader /> :
                        randomdata && randomdata.length > 0 ?
                            <div className='px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-6 '>
                                {
                                    randomdata.map((item, index) => (

                                        <PhotoCard key={index} item={item} />
                                    ))
                                }
                            </div>

                            : <div className='min-h-[25vh] flex items-center justify-center '>
                                <p className='text-xl font-bold'>No Random Photo</p>
                            </div>
                }

            </div>

        </div>
    );
};

export default Home;