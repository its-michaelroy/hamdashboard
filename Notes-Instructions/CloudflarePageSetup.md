# Secure Your Cloudflare Pages Website Using Zero Trust

Follow these steps to secure your Cloudflare Pages website using Zero Trust and email authentication. Should only need **step 4** depending on whether or not you already have a Cloudflare account and/or previous setups.

## Step 1: Create a Cloudflare Account
1. Sign up for a Cloudflare account if you don't already have one.
2. Add your website to Cloudflare by following the instructions to change your DNS settings.

## Step 2: Set Up Cloudflare Tunnel
1. **Create a Tunnel**: Use Cloudflare Tunnel to securely connect your local development environment to Cloudflare. This will allow you to access your website without exposing it directly to the internet.
2. **Install Cloudflared**: Download and install the `cloudflared` daemon on your local machine.
3. **Create a Tunnel**: Run the command to create a tunnel. This will generate a unique tunnel ID.
4. **Update DNS**: Update your DNS records to point to the Cloudflare Tunnel endpoint.

## Step 3: Configure Zero Trust
1. **Access Cloudflare Dashboard**: Go to your Cloudflare dashboard and navigate to the Zero Trust section.
2. **Create a Zero Trust Organization**: Set up a Zero Trust organization to manage access policies.
3. **Configure Identity Provider**: Connect your identity provider (e.g., Google, Okta) to Cloudflare. This will allow you to use email addresses for authentication.
4. **Create Access Application**: Create an Access application to define access policies for your website.
5. **Set Up Policies**: Define policies to control who can access your website based on email addresses and other criteria.

## Step 4: Secure Your Website
1. **Enable Cloudflare Access**: Turn on Cloudflare Access for your website.
2. **Configure Access Policies**: Set up policies to require users to authenticate via email before accessing your website.
3. **Test Access**: Test the setup by accessing your website from different devices and locations to ensure everything is working correctly.

## Step 5: Monitor and Maintain
1. **Monitor Access Logs**: Regularly check access logs to monitor who is accessing your website.
2. **Update Policies**: Update access policies as needed to ensure continued security.
3. **Stay Informed**: Keep up with Cloudflare's updates and best practices to maintain a secure environment.

For more detailed instructions, visit Youtube and the [Cloudflare Zero Trust Web Access Learning Path](https://developers.cloudflare.com/learning-paths/zero-trust-web-access/?form=MG0AV3).
