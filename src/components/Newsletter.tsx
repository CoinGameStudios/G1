
'use client'

export default function Newsletter() {
  return (
    <section className="ftco-section ftco-no-pt">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 heading-section text-center">
            <h2>Newsletter</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form action="#" className="subscribe-form">
              <div className="form-group d-flex">
                <input type="text" className="form-control" placeholder="Enter email address" />
                <input type="submit" value="Subscribe" className="submit px-3" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
