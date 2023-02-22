This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Introduction

A few days ago, the Ministry of Health of the Argentine Nation issued a statement in which it announced the disavowal of digital prescriptions:
https://www.argentina.gob.ar/noticias/sobre-la-validez-de-las-fotos-de-recetas-medicas

On the one hand, digital prescriptions were very useful in the pandemic period, since they simplified the process of authorization and purchase of medicines. But on the other hand, they were also taken advantage of by people who did not have good intentions.

The truth is that the world changed, a while ago. Little by little, paper is going to go out of use, and this cannot be an exception. Being able to access a medicine more easily should be mandatory. So it occurred to me to add a code that can be read from the packaging of a medication. From there, the user will automatically be redirected to a site where they only have to fill in the information of the professional who is prescribing the medication, and that's it! At checkout and pay. Simple, fast and completely legal.

For this pilot test, a single product will be used, which must be prescribed:
Amoxidal (amoxcicillin).

# How does it work

First, the professional must share a single-use code with the patient, generated in the following administrator panel:

![alt text](https://cdn.discordapp.com/attachments/839873725305192459/1079072775060328598/iphone_14_pro_-_2.png)

Then, the patient must scan the QR code present in the consultation. You will automatically be redirected to the product page where you can view the price, the prospectus, the description of the medication, and finalize your purchase.

Product page:

https://mono-product.vercel.app/

## Run the project locally!

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
