import React from 'react';
import {SockModel} from '../models';
import {Formik} from 'formik';

type SockReviewsProps = {
    sock: SockModel
}

// See Forms.jsx for some inspiration?
// Or skip right into using a full fledged Forms package instead?
// https://github.com/jaredpalmer/formik

const SockReviewForm: React.FC<SockReviewsProps> = ({sock}) => {
    return (
        <div className="review-form">
            <Formik initialValues={{name: '', rating: 1, fullReview: ''}}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (values.rating < 1 || values.rating > 5) {
                            errors.rating = 'Must be in range 1-5';
                        }
                        if (values.fullReview.indexOf('smelly') > -1) {
                            errors.fullReview = 'You are smelly! It\'s not the socks\' fault!';
                        }
                    }}
                    onSubmit={(values, setSubmitting) => {
                        setTimeout(() => {
                            console.log(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                        }, 1000);
                    }}
            >
                {({values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting}) => (
                    <form onsubmit={handleSubmit}>
                        <input type="text"
                               name="Name"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.name}/>
                        {errors.name && touched.name && errors.mail}
                        <input type="number"
                               name="Rating"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.rating}/>
                        {errors.rating && touched.rating && errors.rating}
                        <input type="text"
                               name="Full Review"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.fullReview}/>
                        {errors.rating && touched.rating && errors.rating}
                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>
    );
};


export default SockReviewForm;
