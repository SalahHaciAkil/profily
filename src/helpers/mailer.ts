import nodemailer from "nodemailer";
import bcryptjs from "bcryptjs";
import prisma from "@/helpers/prisma";

interface argsType {
  email: string;
  emailType: string;
  userId: string;
}

export const sendEmail = async ({ email, emailType, userId }: argsType) => {
  try {
    const hashedToken = await bcryptjs.hash(userId, 10);

    if (emailType === "VERIFY") {
      await prisma.user.update({
        where: { id: userId },
        data: {
          verifyToken: hashedToken,
          verifyTokenExpiry: (Date.now() + 3600000).toString(),
        },
      });
    } else if (emailType === "RESET") {
      await prisma.user.update({
        where: { id: userId },
        data: {
          forgotPasswordToken: hashedToken,
          forgotPasswordTokenExpiry: (Date.now() + 3600000).toString(),
        },
      });
    }

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3fd364695517df",
        pass: "7383d58fd399cf",
        //TODO: add these credentials to .env file
      },
    });

    const mailOptions = {
      from: "slahjp72@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyemail?token=${hashedToken}
            </p>`,
    };

    const mailResponse = transport.sendMail(mailOptions);
    return mailResponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
