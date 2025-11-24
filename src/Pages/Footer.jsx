"use client";

import FadeUp from "../FadeUp";

export default function Footer() {
  return (
    <footer className="w-full bg-[#15001f] text-white pt-20 pb-10 px-6 md:px-16 lg:px-24">

      <div className="flex flex-col md:flex-row md:justify-between gap-12 border-b border-white/10 pb-16">

        <div className="flex flex-col gap-6">

          <FadeUp>
            <h3 className="text-lg font-medium">Platform</h3>
          </FadeUp>

          <div className="flex flex-col md:flex-row gap-10">

            <FadeUp>
              <div className="flex items-start gap-4 max-w-xs">
                <div>
                  <h4 className="font-semibold text-white">Razor Pay Partner</h4>
                  <p className="text-sm text-white/60">
                    Razor Pay Partner is the smarter and simpler way to set up and scale up your merchant portfolio.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="flex items-start gap-4 max-w-xs">
                <div>
                  <h4 className="font-semibold text-white">Razor Pay Merchant</h4>
                  <p className="text-sm text-white/60">
                    Accept and manage payments from any place, any time — all from a single online portal.
                  </p>
                </div>
              </div>
            </FadeUp>

            <FadeUp>
              <div className="flex items-start gap-4 max-w-xs">
                <div>
                  <h4 className="font-semibold text-white">Razor Pay Developer</h4>
                  <p className="text-sm text-white/60">
                    Secure, scalable payment APIs seamlessly integrated with your systems.
                  </p>
                </div>
              </div>
            </FadeUp>

          </div>
        </div>

        <FadeUp>
          <div className="w-full md:w-80">
            <h3 className="text-lg font-medium mb-4">Subscribe</h3>
            <div className="flex items-center bg-white/10 rounded-xl overflow-hidden">
              <input
                type="email"
                placeholder="name@emailaddress.com"
                className="bg-transparent flex-1 px-4 py-3 text-sm outline-none placeholder-white/50"
              />
              <button className="bg-white text-black font-medium px-6 py-3">
                Send
              </button>
            </div>
            <p className="text-white/50 text-sm mt-3">
              Sign up for our newsletter to stay updated on new features and releases.
            </p>
          </div>
        </FadeUp>

      </div>

      <div className="flex flex-col md:flex-row justify-between items-center mt-6 text-white/60 text-sm">

        <FadeUp>
          <div className="flex flex-col gap-2">
            <p>© 2025 Razor Pay Payments LLC</p>
            <p className="max-w-md">
              Razor Pay Payments LLC is a registered ISO of Wells Fargo Bank, N.A., Concord, CA and Fifth Third Bank, N.A., Cincinnati, OH.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="flex gap-4 mt-4 md:mt-0">
            <div className="w-8 h-8 bg-white/10 rounded grid place-items-center hover:cursor-pointer">in</div>
            <div className="w-8 h-8 bg-white/10 rounded grid place-items-center hover:cursor-pointer">@</div>
          </div>
        </FadeUp>

      </div>
    </footer>
  );
}
