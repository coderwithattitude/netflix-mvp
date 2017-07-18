/**
 * Created by CODERWITHATTITUDE on 7/15/2017.
 */

import React, {Component} from 'react';
import { Link } from 'react-router';
import Nav from './Nav';

class Upload extends Component{


     uploadWidget = () = {
         window.cloudinary.openUploadWidget(
         { cloud_name: 'cloud_name',
           upload_preset: 'unsigned-preset',
           tags: ['miniflix'],
           sources: ['local', 'url', 'google_photos', 'facebook', 'image_search']
             },function (error, result) {
             console.log("This is the result of the upload", result);
         });
     }

    render(){
        return(
            <div>
                <Nav />
                <h3 className="text-center"> Upload Your 20-second Video in a Jiffy</h3>
                <hr/>

                <div className="col-sm-12">
                    <div className="jumbotron text-center">
                        <button className="btnn btn-lg btn-info">
                            Upload Video
                        </button>
                    </div>
                </div>
            </div>


        );
    }
}
export default Upload;