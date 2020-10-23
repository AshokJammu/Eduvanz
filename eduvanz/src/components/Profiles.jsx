import React from "react";

const Profiles = (props) => {
  const { userArr, match } = props;
  //   console.log(props, userArr);
  const items = userArr && userArr.find((item) => item._id === match.params.id);
  //   console.log(items, "items");
  return (
    <>
      <div class="col-xl-3 col-lg-6">
        <div class="card card-stats mb-4 mb-xl-0">
          <div class="card-body">
            <div class="row">
              <div class="col">
                <h5 class="card-title text-uppercase text-muted mb-0">
                  {items && items.name}
                </h5>
                <span class="h2 font-weight-bold mb-0">
                  {items && items.profession}
                </span>
              </div>
              <div class="col-auto">
                <div class="icon icon-shape bg-danger text-white rounded-circle shadow">
                  <i class="fas fa-chart-bar"></i>
                </div>
              </div>
            </div>
            <p class="mt-3 mb-0 text-muted text-sm">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> Age: {items && items.age}
              </span>
              <span class="text-nowrap">DOB: {items && items.dob}</span>
            </p>
            <p class="mt-3 mb-0 text-muted text-sm">
              <span class="text-success mr-2">
                <i class="fa fa-arrow-up"></i> Guests:{items && items.guests}
              </span>
            </p>
              <span class="text-nowrap">{items && items.locality}</span>
            <p>
              <span class="text-nowrap">{items && items.address}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profiles;
