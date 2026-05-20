## სწავლის შედეგი 1: ცვლადები, ფუნქციები, არითმეტიკა

1. შექმენით ფუნქცია `calculateAverage` და ცვლადები: `scoreA`, `scoreB`, `scoreC`.
2. მიანიჭეთ სამივე ცვლადს რიცხვითი მნიშვნელობები.
3. გამოთვალეთ საშუალო ქულა ფორმულით `(scoreA + scoreB + scoreC) / 3`.
4. დაბეჭდეთ კონსოლში ტექსტი: `Average is: ...`.

---

## სწავლის შედეგი 2: If/Else, ციკლები, ღილაკი და Input

1. შექმენით ცვლადები `temperature` და `hasWind`.
2. If/Else-ით დაბეჭდეთ:
   - `Too cold` თუ `temperature < 5`
   - `Windy day` თუ ტემპერატურა >= 5 და `hasWind === true`
   - `Good weather` სხვა შემთხვევაში
3. `for` ციკლით დაბეჭდეთ რიცხვები 50-დან 30-მდე (კლებადობით).
4. HTML-ში შექმენით ღილაკი, რომლის დაჭერისას გამოჩნდება/დაიმალება ტექსტი `Hidden block`.
5. შექმენით input, სადაც Enter-ზე დაჭერისას ტექსტი დაემატება სიის ახალ ელემენტად.

---

## სწავლის შედეგი 3: მასივები (Arrays)

1. მოცემულია მასივი:

```javascript
const animals = ["cat", "elephant", "dog", "giraffe", "fox", "dolphin", "lion"];
```

`for...of` ციკლით შექმენით ახალი მასივი, სადაც იქნება მხოლოდ ის სიტყვები, რომელთა სიგრძე 4-ზე მეტია.

2. ახალ მასივს დაუმატეთ ელემენტი შუაში `splice()`-ით.

3. მოცემულია:

```javascript
const points = [3, 17, 22, 9, 31, 14, 28, 5];
```

`filter()`-ით მიიღეთ 10-დან 25-მდე რიცხვები.

4. მოცემულია ორი მასივი:

```javascript
const left = [2, 8, 2, -1, 7];
const right = [7, 3, -1, 12, 5];
```

გააერთიანეთ, ამოიღეთ დუბლიკატები (`Set`), დაალაგეთ ზრდადობით და დაბეჭდეთ.

---

## სწავლის შედეგი 4: Date, String, Storage, Time, Alert, Events

1. `Date` გამოყენებით დაბეჭდეთ მიმდინარე კვირის დღე და საათი.
2. მოცემულია `const phrase = "hello js world";` ჩაანაცვლეთ `js` სიტყვით `javascript` და დაბეჭდეთ.
3. შექმენით input + ღილაკი: ღილაკზე დაჭერისას შეინახეთ ტექსტი `localStorage`-ში გასაღებით `userText`.
4. გვერდის ჩატვირთვისას წაიკითხეთ `userText` და აჩვენეთ HTML-ზე (არა მხოლოდ კონსოლში).
5. `setInterval()`-ით ყოველ 1 წამში დაბეჭდეთ countdown 5-დან 1-მდე.

---

## სწავლის შედეგი 5: HTML ელემენტების შეცვლა

1. იპოვეთ ყველა `.card` ელემენტი და დაბეჭდეთ კონსოლში.
2. თითოეულ `.card` ელემენტს შეუცვალეთ border და padding JS-დან.
3. შექმენით ახალი `p` ელემენტი ტექსტით `Dynamic paragraph` და დაამატეთ გვერდის ბოლოს.
4. პირველ `.card` ელემენტზე დაამატეთ `click` ივენთი, რომელიც შეუცვლის background ფერს.
5. input-ზე დაამატეთ `change` ივენთი და დაბეჭდეთ შეცვლილი მნიშვნელობა.

---

## სწავლის შედეგი 6: Fetch API და async/await

1. `fetch()`-ით მიიღეთ 4 todo შემდეგი URL-დან:

```
https://jsonplaceholder.typicode.com/todos?_limit=4
```

2. `async/await`-ით გააგზავნეთ `POST` მოთხოვნა URL-ზე:

```
https://jsonplaceholder.typicode.com/comments
```

ობიექტი:

```javascript
{
  "name": "Practice User",
  "email": "practice@example.com",
  "body": "This is a new practice comment",
  "postId": 3
}
```

დაბეჭდეთ `status`, `ok`, და დაბრუნებული მონაცემი.

3. `fetch` + `try/catch`-ით მიიღეთ 5 მომხმარებელი URL-დან:

```
https://jsonplaceholder.typicode.com/users?_limit=5
```

HTML-ში აჩვენეთ თითოეულისთვის: `name`, `email`, `company.name`.
