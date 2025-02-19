
'use client'
import Image from 'next/image'

export default function Services() {
  return (
    <section className="ftco-section ftco-services">
      <div className="container">
        <div className="row">
          <div className="col-md-4 d-flex services align-self-stretch px-4">
            <div className="d-block services-wrap text-center">
              <div className="img">
                <Image src="/images/services-1.jpg" alt="Lawn Mowing" width={400} height={300} />
              </div>
              <div className="media-body py-4 px-3">
                <h3>Lawn Mowing</h3>
                <p>Professional lawn mowing services to keep your yard looking pristine.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
