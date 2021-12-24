# Deploying SSW Website

After following the steps below, you will be able to setup your Azure resources and deploy the Gatsby website! 

## Setting up for deployment

### Requirements

- Create an Azure account (a free account can be obtained from https://azure.microsoft.com/en-us/free/)
- Create a new Resource Group in Azure Portal by clicking **Navigation Pane | Resource groups | + Create**
- Install the Azure CLI from https://docs.microsoft.com/en-us/cli/azure/install-azure-cli

### Setup Azure CLI
1. Run `az login`
2. Follow the prompts to log in to Azure CLI
3. Run `az account list` to find your Azure Subscriptions
4. Use the `name` field to identify the Azure Subscription you want to use
5. Save the `tenantId` value for later use
6. Run ```az ad sp create-for-rbac --name sswwebsite 
        --role contributor --scopes /subscriptions/<your.tenantId>/resourceGroups/<your.resourceGroup> --sdk-auth``` 
    - Replace <your.tenantId> with the saved tenantId
    - Replace <your.resourceGroup> with the Resource Group name you created
7. Save the `sswwebsite` credentials for later

**Note:** Steps 6 and 7 will need to be repeated (with different names) if you wish to publish to 2 different Resource Groups.
 
### Creating GitHub Secrets

The GitHub actions in this repository require the correct secrets and environment secrets to successfully deploy to Azure.

1. Create two environments in GitHub:
    - Staging
    - Production

2. Setup each environment with the following secrets:
    - AZURE_CREDENTIALS
      - Set as the `sswwebsite` credentials from the `Setup Azure CLI` section
    - AZURE_RESOURCE_GROUP
      - Set as the `resourceGroup` you created credentials for
    - AZURE_APP_NAME
      - Set as your desired prefix for your resources e.g. `sswwebsite`  
        **Note:** Keep this a bit shorter (~10 characters) so as not to break the Azure resoruce character limit
    - AZURE_TENANT
      - Set as the `tenantId` from the `Setup Azure CLI` 
    - CONTENT_BRANCH
      - Set as the name of the branch to source content from in the content repository

Once the GitHub environments are set up you have the opportunity to place protections on your production environment so that deploys can't happen accidentally.

### Run Bicep Template

Once all of the environment secrets are created, you are ready to reploy the required Azure Resources to your resource group.

In your GitHub repository

1. Navigate to **Actions | Deploy Azure Resources | Run workflow**
2. Click **Run workflow**

### Deploy the Gatsby site to Azure

You're finally ready to deploy your static site to Azure!

1. Navigate to **Actions | Staging - Deploy Gatsby Site | Run workflow**
2. Click **Run workflow**

**Note: ** Running the `Production - Deploy Gatsby Site` action will deploy the website to your production environment
