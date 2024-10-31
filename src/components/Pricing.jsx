import React from 'react';
import { Star } from 'lucide-react';

const Pricing = () => {
  const pricingPlans = [
    {
      credits: 30,
      price: 9,
      description: "30 room redesigns",
      subtitle: "Every design generated"
    },
    {
      credits: 105,
      price: 19,
      description: "105 room redesigns",
      subtitle: "Every design generated",
      popular: true
    },
    {
      credits: 200,
      price: 29,
      description: "200 room redesigns",
      subtitle: "Every design generated"
    }
  ];

  const features = [
    "Premium support by email",
    "Commercial usage of credits",
    "Coming Soon: Save your rooms in a dashboard",
    "Ability to request features",
    "Early access to new features",
    "Coming Soon: Premium room types and styles"
  ];

  const testimonials = [
    {
      text: "This is incredible, you don't need expensive designer anymore!",
      author: "Ana Davis",
      role: "Interior Designer"
    },
    {
      text: "Finally! Something to help me get over my commitment-fear decorating my house!",
      author: "Arthur Dawkins",
      role: "Homeowner"
    },
    {
      text: "You've changed my room space! Such genius, just couldn't stop using this.",
      author: "Rob Mitchell",
      role: "Software Engineer"
    },
    {
      text: "You can now see your room in different styles before you spend money on it!",
      author: "Keila",
      role: "Interior Designer"
    },
    {
      text: "So good I love this app! Has changed so the better!",
      author: "Eve Porcello",
      role: "Product Designer"
    },
    {
      text: "Was using the today - the best AI I've ever used.",
      author: "Paul Holmes",
      role: "Designer"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
     


      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Pricing Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Buy <span className="text-blue-500">Dream Habitat</span> Credits
          </h1>
          <p className="text-gray-600">
            You have 1 credit - Join thousands of happy customers by buying more below.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="relative bg-white rounded-xl shadow-lg p-6">
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    MOST POPULAR
                  </span>
                </div>
              )}
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">{plan.credits} credits</h2>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <p className="text-gray-500 text-sm mb-4">{plan.subtitle}</p>
                <div className="text-3xl font-bold mb-6">US ${plan.price}</div>
                <button className={`w-full py-2 rounded-lg font-medium ${
                  plan.popular 
                    ? 'bg-blue-500 text-white hover:bg-blue-600' 
                    : 'bg-blue-100 text-blue-600 hover:bg-blue-200'
                }`}>
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">What's included</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Loved by many <span className="text-blue-500">Worldwide.</span>
            </h2>
            <p className="text-gray-600">
              See what our over 2 million users are saying about the product.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                  <div>
                    <div className="font-medium">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-4 py-8 mt-12 border-t">
        <div className="flex justify-between items-center text-sm text-gray-500">
          <div>
            Powered by <span className="font-medium">OpenAI</span> and <span className="font-medium">Replicate</span>
          </div>
          <div>
            Created by <span className="font-medium">Hassan </span>
            (<a href="#" className="text-blue-500">hassan@roomgpt.io</a>)
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Pricing;