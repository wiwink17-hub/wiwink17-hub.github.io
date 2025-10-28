import collectionBanner from "@/assets/collection-banner.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">About MODEVA</h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Where timeless elegance meets contemporary design
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="animate-fade-in">
            <img
              src={collectionBanner}
              alt="MODEVA Collection"
              className="w-full h-[500px] object-cover rounded-sm"
            />
          </div>
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-serif font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2020, MODEVA was born from a passion for creating timeless fashion
                pieces that transcend seasonal trends. We believe that true style is eternal,
                and every piece in our collection is designed with this philosophy in mind.
              </p>
              <p>
                Our commitment to quality craftsmanship and sustainable practices ensures that
                each garment not only looks beautiful but also stands the test of time. We work
                with skilled artisans and use only the finest materials to create pieces that
                you'll treasure for years to come.
              </p>
              <p>
                At MODEVA, we celebrate individuality and encourage self-expression through
                fashion. Our collections are designed for the modern individual who appreciates
                quality, sophistication, and timeless elegance.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-serif font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Quality</h3>
              <p className="text-sm text-muted-foreground">
                Exceptional craftsmanship in every piece
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Sustainability</h3>
              <p className="text-sm text-muted-foreground">
                Committed to ethical and eco-friendly practices
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Passion</h3>
              <p className="text-sm text-muted-foreground">
                Dedicated to creating pieces we love
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
