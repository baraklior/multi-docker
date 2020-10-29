

import React from 'react';
import { Link } from 'react-router-dom';


function do_a_thing(){
    return(
        <div>
            I'm some other page
            <Link to="/"> GO Home Youre drunk</Link>
        </div>
    );
};

export default do_a_thing;