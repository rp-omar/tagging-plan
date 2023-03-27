# How to generate the events object

## 1. clone repo

```bash
  git clone git@github.com:rp-omar/tagging-plan.git
  cd tagging-plan
```

## 2. Download the latest version of the tagging plan CSV file

- Got to [tagging plan events sheet](https://docs.google.com/spreadsheets/d/1oyC25yXbH9BFCuUHNqhA9AKgFtSdXpOI_o_9red7RjQ/edit#gid=0)
- Click on the `File` menu and select `Download as` > `Comma-separated values (.csv, current sheet)`

## 3. Run the script

```bash
  npm run format
```

or if you don't have npm installed

```bash
  node index.js
```

## 4. Copy the output

- Copy the output from the generated `events.js` file
- Paste the content in the `events.js` file in your project
