import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { supabase } from '../../utils/supabase';
import toast from 'react-hot-toast';
import styles from './SignIn.module.css';


const SignIn = () => {

    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    const handleSignIn = async () => {
        let { data: res, error } = await supabase.auth.signInWithPassword(data);
        if (error) {
            throw error.message;
        } else {
            localStorage.setItem("user", JSON.stringify(res.session));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isAnyFieldEmpty = Object.values(data).some(
            (value) => value.trim() === ""
        );
        if (isAnyFieldEmpty) {
            toast.error("Please fill out all fields.");
            return;
        }

        toast.promise(handleSignIn(), {
            loading: "Signing in...",
            success: () => {
                navigate("/dashboard");
                return <b>Signed in successfully</b>;
            },
            error: (error) => {
                return <b>{error}</b>;
            },
        });
    };

    useEffect(() => {
        (async () => {
            const res = await supabase.auth.getUser();
            if (res.data.user?.aud == "authenticated") {
                navigate("/dashboard");
            }
        })()
    }, [])
    return (
        <div className={styles.sigInWrapper}>
            <div className={styles.sigInHeader}>
                <span>Log In</span>
                <span>Please sign in to your existing account</span>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <p>Email</p>
                    <input
                        type="email"
                        placeholder="email address"
                        onChange={(e) => setData({ ...data, email: e.target.value })}
                    />
                </div>
                <div>
                    <p>Password</p>
                    <input
                        type="password"
                        placeholder="••••••••"
                        onChange={(e) => setData({ ...data, password: e.target.value })}
                    />
                </div>
                <div className={styles.ForgotPass}>
                    {/* <div>
                    {" "}
                    <input id="remeberme" type="checkbox" />
                    <label htmlFor="remeberme">Remember me </label>
                  </div>
                  <button>Forgot Password</button> */}
                </div>
                <button type="submit">Sign In</button>
            </form>

            <span>
                Don&apos;t have an account? &nbsp;
                <a href="/signup">Sign up</a>
            </span>
            {/* <p>OR</p>
              <button className={styles.Google}>
                <Googlesvg /> <p>Sign in with Google</p>
              </button> */}
        </div>
    )
}


export default SignIn