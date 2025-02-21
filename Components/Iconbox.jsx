import React from 'react';

const Iconbox = () => {
  return (
    <>
      <div className='container icon-box' data-aos="fade-up">
        <div className='row justify-content-center'>
          <div className='boxstyle'>
            <div className='col-lg-3 col-md-6 col-6'>
              <div className='infoicon'>
                <iconify-icon
                  icon='material-symbols:rocket-launch-outline-rounded'
                  id='boxicon'
                ></iconify-icon>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-6'>
              <div className='infoicon'>
                <iconify-icon
                  icon='material-symbols:lightbulb-outline-rounded'
                  id='boxicon'
                ></iconify-icon>
              </div>
            </div>

            <div className='col-lg-2 col-md-6 col-6'>
              <div className='infoicon'>
                <iconify-icon
                  icon='healthicons:people-outline'
                  id='boxicon'
                ></iconify-icon>
              </div>
            </div>

            <div className='col-lg-3 col-md-6 col-6'>
              <div className='infoicon'>
                <iconify-icon
                  icon='material-symbols:shield-lock-outline-sharp'
                  id='boxicon'
                ></iconify-icon>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </>
  );
};

export default Iconbox;
