import React from 'react';
// import './Signin.css';

const Signin = ({onRouteChange}) => {
  return (
    <article className="center br3 ba gray  mv4 w-100 w-50-m w-25-l mw6 shadow-5 ">
    <main className="pa4 black-80">
        <form className="measure center">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 center fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
                <label className="db fw6 lh-copy f6" for="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br3" type="email" name="email-address"  id="email-address"/>
            </div>
            <div className="mv3">
                <label className="db fw6 lh-copy f6" for="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 br3" type="password" name="password"  id="password"/>
            </div>
            </fieldset>
            <div className="">
             <input 
             onClick={() => onRouteChange('home')} 
             className="center b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dibr br3 " type="submit" value="Sign in"/>
            </div>
            <div className="lh-copy mt3 ">
            <p onClick={() => onRouteChange('register') } className="f6 link dim black db pointer"> Register</p>
            </div>
        </form>
</main>
</article>
  );
}

export default Signin;