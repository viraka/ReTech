import styles from './Form.module.css'
type Props = {
    handleChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    companyDetails: {
        name: string;
        phone: string;
        description: string;
        address: string;
        locationLink: string;
    }
}

const Form = ({ handleChange, handleSubmit, companyDetails }: Props) => {
    return (
        <>
            <p>Please fill your Company Details to Continue</p>
            <form onSubmit={handleSubmit} className={styles.companyForm}>
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={companyDetails.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Phone:
                    <input
                        type="tel"
                        name="phone"
                        value={companyDetails.phone}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Description:
                    <textarea
                        name="description"
                        value={companyDetails.description}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <label>
                    Address:
                    <textarea

                        name="address"
                        value={companyDetails.address}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    <br />
                    Link to Location:
                    <input
                        type="text"
                        name="locationLink"
                        value={companyDetails.locationLink}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />

                <button type="submit">Submit</button>
            </form >
        </>
    )
}

export default Form