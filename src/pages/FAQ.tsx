import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      category: "Orders & Payment",
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards (Visa, MasterCard, American Express, Discover), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or cancelled within 2 hours of placement. After this time, your order will be in processing and cannot be changed. Please contact us immediately if you need to make changes."
        },
        {
          question: "Do you offer gift cards?",
          answer: "Yes! Gift cards are available in denominations of $50, $100, $200, and $500. They never expire and can be used on any items in our store."
        },
        {
          question: "How do I use a promo code?",
          answer: "Enter your promo code at checkout in the 'Discount Code' field and click 'Apply'. The discount will be reflected in your order total. Only one promo code can be used per order."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "How long does shipping take?",
          answer: "Standard shipping takes 5-7 business days, Express shipping takes 2-3 business days, and Overnight shipping arrives the next business day. International orders typically take 7-14 business days."
        },
        {
          question: "Do you ship internationally?",
          answer: "Yes, we ship to over 100 countries worldwide. International shipping costs and delivery times vary by destination. Customs duties and import taxes may apply."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order ships, you'll receive a tracking number via email. You can use this number to track your package on our website or the carrier's website."
        },
        {
          question: "What if my package is lost or damaged?",
          answer: "If your package is lost or arrives damaged, please contact us within 48 hours of expected delivery. We'll work with the carrier to resolve the issue and send a replacement or refund."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What is your return policy?",
          answer: "We offer a 30-day return policy on all items. Items must be unworn, unwashed, with original tags attached. Simply contact us to initiate a return and we'll send you a prepaid return label."
        },
        {
          question: "How long do refunds take?",
          answer: "Refunds are processed within 5-7 business days of receiving your return. Please allow an additional 5-10 business days for the refund to appear in your account."
        },
        {
          question: "Can I exchange an item?",
          answer: "Yes! We're happy to exchange items for a different size or color, subject to availability. Follow the same process as returns and indicate your preferred replacement."
        },
        {
          question: "Do I have to pay for return shipping?",
          answer: "No, we provide a prepaid return label for all US returns. International customers are responsible for return shipping costs."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I find my size?",
          answer: "Check our detailed Size Guide page for comprehensive measurements. Each product page also includes specific fit notes. If you're between sizes, we recommend sizing up."
        },
        {
          question: "Are your products true to size?",
          answer: "Yes, our items generally run true to size. However, fit can vary by style. Check individual product pages for specific fit information and customer reviews."
        },
        {
          question: "How should I care for my MODEVA items?",
          answer: "Most items require professional dry cleaning to maintain their quality. Always check the care label inside each garment for specific instructions."
        },
        {
          question: "Do you restock sold-out items?",
          answer: "Popular items are often restocked, but availability varies. Sign up for restock notifications on product pages or contact us to inquire about specific items."
        }
      ]
    },
    {
      category: "Account & Privacy",
      questions: [
        {
          question: "Do I need an account to place an order?",
          answer: "No, you can checkout as a guest. However, creating an account allows you to track orders, save favorites, and checkout faster on future purchases."
        },
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email. We'll send you instructions to reset your password."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption to protect your personal and payment information. We never share your data with third parties without your consent."
        },
        {
          question: "How do I unsubscribe from emails?",
          answer: "Click the 'Unsubscribe' link at the bottom of any marketing email, or manage your email preferences in your account settings."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Find answers to common questions about shopping with MODEVA
          </p>

          <div className="space-y-8">
            {faqs.map((category, idx) => (
              <section key={idx}>
                <h2 className="text-2xl font-semibold mb-4">{category.category}</h2>
                <Accordion type="single" collapsible className="space-y-2">
                  {category.questions.map((faq, qIdx) => (
                    <AccordionItem
                      key={qIdx}
                      value={`${idx}-${qIdx}`}
                      className="border border-border rounded-sm px-6 bg-card"
                    >
                      <AccordionTrigger className="text-left font-medium hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </section>
            ))}
          </div>

          <section className="mt-12 p-8 bg-muted rounded-sm text-center">
            <h3 className="text-xl font-semibold mb-3">Still Have Questions?</h3>
            <p className="text-muted-foreground mb-6">
              Our customer service team is here to help
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-sm hover:bg-primary/90 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="mailto:info@modeva.com"
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background font-medium rounded-sm hover:bg-muted transition-colors"
              >
                Email Support
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
