// import React from 'react'
// import '../ProjectCSS/styles.css'

// const SearchBar = () => {
//   return (
//     <div className="container">
// 	<div className="row">
// 	    <div className="col-12"><h2>Search your Regex</h2></div>
// 	    <div className="col-12">
//     	    <div id="custom-search-input">
//                 <div className="input-group">
//                     <input type="text" className="search-query form-control" placeholder="Search" />
//                     <span className="input-group-btn">
//                         <button type="button" disabled>
//                             <span className="fa fa-search"></span>
//                         </button>
//                     </span>
//                 </div>
//             </div>
//         </div>
// 	</div>
// </div>
//   )
// }

// export default SearchBar



import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const SearchBar = ({ onSearch }) => {
  const initialValues = {
    query: '',
  };

  const validationSchema = Yup.object().shape({
    query: Yup.string().required('Query is required'),
  });

  const handleSubmit = (values) => {
    onSearch(values.query);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="container">
          <div className="row">
            <div className="col-12">
              <h2>Search your Regex</h2>
            </div>
            <div className="col-12">
              <div id="custom-search-input">
                <div className="input-group">
                  <Field
                    type="text"
                    name="query"
                    className="search-query form-control"
                    placeholder="Search"
                  />
                  <span className="input-group-btn">
                    <button type="submit">
                      <span className="fa fa-search"></span>
                    </button>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SearchBar;
