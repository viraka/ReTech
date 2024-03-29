import { useEffect, useState } from 'react'
import { supabase } from '../../utils/supabase';
import toast from 'react-hot-toast';
import styles from './Dashboard.module.css'
import Form from './components/Form/Form';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';


const Dashboard = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const navigate = useNavigate();
    const [companyDetails, setCompanyDetails] = useState<shop>({
        name: '',
        phone: '',
        description: '',
        address: '',
        locationLink: '',
        owner_id: '',
        email: '',
        services: [],
        products: []
    });

    const [service, setService] = useState<string>('')
    const [product, setProduct] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCompanyDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value,
        }));
    };


    const handleAuthOut = async () => {
        let error = await supabase.auth.signOut();
        if (error) {
            throw error;
        }
        else {
            navigate('/')
        }
    };

    const checkBackend = async () => {
        let { data, error } = await supabase
            .from('shop').select('*')
            .eq('owner_id', ((await supabase.auth.getUser()).data.user?.id));
        if (error) {
            throw error;
        }
        else if (data?.length ?? 0 > 0) {
            setIsAuth(true)
            return data;
        }
    }
    const addService = async () => {

        if (Array.isArray(companyDetails.services)) {
            setCompanyDetails({ ...companyDetails, services: [...companyDetails.services, service] });
            const res = await supabase
                .from('shop')
                .upsert({ ...companyDetails, services: [...companyDetails.services, service] })
                .select()
            if (res.error) {
                throw res.error;
            }
            else {
                return res
            }
        } else {
            setCompanyDetails({ ...companyDetails, services: [service] });
            const res = await supabase
                .from('shop')
                .upsert({ ...companyDetails, services: [service] })
                .select();
            if (res.error) {
                throw res.error;
            }
            else {
                return res
            }
        }
    }


    const addProduct = async () => {

        if (Array.isArray(companyDetails.products)) {
            setCompanyDetails({ ...companyDetails, products: [...companyDetails.products, product] });
            const res = await supabase
                .from('shop')
                .upsert({ ...companyDetails, products: [...companyDetails.products, product] })
                .select()
            if (res.error) {
                throw res.error;
            }
            else {
                return res
            }
        } else {
            setCompanyDetails({ ...companyDetails, products: [product] });
            const res = await supabase
                .from('shop')
                .upsert({ ...companyDetails, products: [product] })
                .select();
            if (res.error) {
                throw res.error;
            }
            else {
                return res
            }
        }
    }


    const handleSignOut = async () => {
        toast.promise(handleAuthOut(), {
            loading: 'Signing out...',
            success: () => {
                return <b>Something Bad Happened</b>
            },
            error: (error) => {
                if (!error) {
                    console.log(error);
                }
                else {
                    navigate('/')
                }
                return <b>Signed Out Successfully</b>
            }
        })
    }

    const handleCreateUser = async () => {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        if (user) {
            const { data: response, error } = await supabase
                .from("shop")
                .insert({ ...companyDetails, owner_id: user.id, email: user.email! })
            if (error) {
                throw error.message;
            } else if (response) {
                return response;
            }
        } else {
            navigate("/signin");
            throw "User not found please sign in";
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const isAnyFieldEmpty = Object.entries(companyDetails)
            .filter(
                ([key]) =>
                    key !== "owner_id" &&
                    key !== "email"
            )
            .some(([, value]) => {
                if (typeof value === 'string') {
                    return value.trim() === "";
                }
                return false;
            });

        if (isAnyFieldEmpty) {
            toast.error("Please fill out all fields.");
            return;
        }

        toast.promise(handleCreateUser(), {
            loading: "Creating your profile...",
            success: () => {
                setIsAuth(true)
                navigate("/dashboard");
                return <b>Profile creation successful</b>;
            },
            error: (error) => {
                return <b>{error}</b>;
            },
        });
    };

    useEffect(() => {
        (async () => {
            const res = await checkBackend();
            if (isAuth) {
                setCompanyDetails(res![0]);
            }
        })();
    }, [isAuth]);

    return (
        <>
        <div className={styles.signout}>
                <button onClick={handleSignOut}><FaArrowLeft />Sign Out</button>
            </div>
            <br />
            {isAuth ? (
                <>
                    <div className={styles.dashboardWrapper}>
                        <div className={styles.dashboardBox}>
                           <div className={styles.mainContent}> 
                                <span>{companyDetails.name}</span>
                                <span>{companyDetails.description}</span>
                                <span>{companyDetails.email}</span>
                                <span>{companyDetails.address}</span>
                                <span>{companyDetails.phone}</span>
                                <span>{companyDetails.locationLink}</span>
                            </div>
                            
                            <div> <img src="https://i.pinimg.com/originals/ec/d9/c2/ecd9c2e8ed0dbbc96ac472a965e4afda.jpg" alt="No image" /></div>
                        </div>
                    </div>
                    <div className={styles.dashboardServices}>
                        <span>Services :</span>
                        
                    <div className={styles.addServices}>
                        <input value={service}
                            onChange={(e) => setService(e.target.value)}
                            type="text" />
                    </div>
                        <button onClick={() => addService()}>Add</button>
                    </div>
                    {companyDetails.services?.map((service, index) => {
                            return <div key={index} className={styles.servies}>{service}</div>
                        })
                        }
                    <div className={styles.dashboardServices}>
                        <span>Products : </span>
                        
                    <div className={styles.addServices}>
                        <input
                            value={product}
                            type="text"
                            onChange={(e) => setProduct(e.target.value)}
                            
                            />
                    </div>
                        <button onClick={() => addProduct()}>Add</button>
                    </div>
                    {companyDetails.products?.map((product, index) => {
                            return <div key={index} className={styles.servies}>{product}</div>
                        })
                        }
                </>
            ) : (

                <Form

                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    companyDetails={companyDetails}
                />
            )}
        </>
    )
}

export default Dashboard