"use client";

import Navbar from "@/components/NavBar";
import Footer from "../footer/page";
import { useState } from "react";

const rules = [
  "Tones",
  "Pinyin",
  "Hanzi & Stroke Order",
  "Sentence Structure",
  "Particles",
  "Measure Words",
  "Verb Tense Markers",
  "Negation",
  "Pronouns",
  "Question Words",
  "Numbers & Counting",
  "Time & Dates",
];

const ruleContent = {
  "Tones": (
    <div className="space-y-6">
      <h1 className="text-lg font-bold">Mandarin Tones (<span className="text-red-500">声调 shēngdiào</span>)</h1>
      <p>
        Mandarin has <strong>five tones</strong>. Even if the letters stay the
        same, the tone changes the word’s meaning completely.
      </p>

      <h2 className="font-semibold text-base">The Five Tones</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <div>
            <div>
              <strong className="text-red-500">1st Tone (ˉ):</strong> High and steady → mā (<span className="text-red-500">妈</span> = mother)
            </div>
            <span className="italic">
              As you would say in English (Ah or maybe)
            </span>
          </div>
        </li>
        <li>
          <div>
            <div> 
              <strong className="text-red-500">2nd Tone (ˊ):</strong> Rising → má (<span className="text-red-500">麻</span> = hemp)
            </div>
            <span className="italic"> As you would say in English (What)</span>
          </div>
        </li>
        <li>
          <div>
            <div>
            <strong className="text-red-500">3rd Tone (ˇ):</strong> Low-dipping → mǎ (<span className="text-red-500">马</span> = horse)
            </div>
            <span className="italic">
              As you would say in English (Well or uh)
            </span>
          </div>
        </li>
        <li>
          <div>
            <div>
            <strong className="text-red-500">4th Tone (ˋ):</strong> Falling and sharp → mà (<span className="text-red-500">骂</span> = scold)</div>
            <span className="italic">
              As you would say in English (Go or no)
            </span>
          </div>
        </li>
        <li>
          <div>
            <div>
          <strong className="text-red-500">Neutral Tone:</strong> Light, quick, and unstressed → ma (<span className="text-red-500">吗</span> =
          question particle)
          </div>
          <span className="italic">As you would say in English ("uh" in "uh-huh" (the second syllable))</span>
          </div>
        </li>
      <table>
        <thead>
          <tr>
            <th className="px-4 py-2 border">Tone</th>
            <th className="px-4 py-2 border">Name</th>
            <th className="px-4 py-2 border">Voice Trick / Mnemonic </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">1st</td>
            <td className="px-4 py-2 border">High</td>
            <td className="px-4 py-2 border">"Ahhh\~" like singing a note 🎶</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">2nd </td>
            <td className="px-4 py-2 border">Rising</td>
            <td className="px-4 py-2 border">"What?" with questioning tone ❓</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">3rd </td>
            <td className="px-4 py-2 border">Low Dip</td>
            <td className="px-4 py-2 border">"Uh-huh" with a bounce ↘↗</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">4th</td>
            <td className="px-4 py-2 border">Falling</td>
            <td className="px-4 py-2 border">"No!" like you're snapping ✋</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border">**Neutral**</td>
            <td className="px-4 py-2 border">Light</td>
            <td className="px-4 py-2 border">"meh..." or fading away 🕊️</td>
          </tr>
        </tbody>
      </table>
      </ul>
      <h2 className="text-base font-bold">Tone Rules – What You Must Know</h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <strong>Tones are not optional.</strong>
            <p className="mt-1">
              Changing the tone = changing the meaning. Example: mā (<span className="text-red-500">妈</span>) ≠ mà
              (<span>骂</span>).
            </p>
          </div>
        </li>
        <li>
          <div>
            <strong>Learn tones with whole words, not single syllables.</strong>
            <p className="mt-1">
              Don’t just memorize <span className="text-red-500">mǎ</span>.
              Learn it in phrases like{" "}
              <span className="text-red-500">mǎi dōngxi</span> (买东西 = buy
              stuff). Context makes tones stick better.
            </p>
          </div>
        </li>
        <li>
          <div>
            <strong>Neutral tone = soft and unstressed.</strong>
            <p className="mt-1">
              Used in words like{" "}
              <span className="text-red-500">吗, 呢, 吧</span>. It doesn’t have
              a marked pitch and is lighter than other tones.
            </p>
          </div>
        </li>
      </ol>

      <h2 className="text-base font-bold">
        Tone Sandhi – Tone Changes in Context
      </h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <p>
              <strong>3rd + 3rd → 2nd + 3rd</strong>
            </p>
            <p className="mt-1">
              When two 3rd tones come together, the first one changes to 2nd
              tone.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">nǐ hǎo → ní hǎo</span> (你好 =
                hello)
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>一 (yī) changes based on following tone:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                Before 4th tone → becomes 2nd tone →{" "}
                <span className="text-red-500">yí yàng</span> (一样 = same)
              </li>
              <li>
                Before any other tone → becomes 4th tone →{" "}
                <span className="text-red-500">yì bǎi</span> (一百 = one
                hundred)
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>不 (bù) changes before 4th tone:</strong>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">bù → bú</span> before a 4th tone
                → <span className="text-red-500">bú duì</span> (不对 =
                incorrect)
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  "Pinyin": (
    <div className="space-y-6">
  <h1 className="text-lg font-bold">Mandarin Pinyin (<span>拼音</span> pīnyīn)</h1>
  <p>
    Pinyin is the Romanized system used to represent Mandarin pronunciation using the Latin alphabet. 
    It’s made up of <strong>initials</strong> (consonants), <strong>finals</strong> (vowel sounds), and <strong>tones</strong>.
  </p>

  <h2 className="text-base font-bold">Core Pinyin Rules</h2>
  <ol className="list-decimal pl-6 space-y-6">
    <li>
      <div>
        <p>
          <strong>Structure:</strong> Pinyin syllables = Initial + Final + Tone
        </p>
        <p className="mt-1 italic">Examples:</p>
        <ul className="list-disc pl-6 mt-1">
          <li>
            <span className="text-red-500">mā</span> = m (initial) + a (final) + 1st tone
          </li>
          <li>
            <span className="text-red-500">xiè</span> = x + ie + 4th tone
          </li>
        </ul>
      </div>
    </li>

    <li>
      <div>
        <p>
          <strong>Tone Mark Placement:</strong> Tone marks go on the <strong>main vowel</strong>
        </p>
        <p className="mt-1">Priority order: a &gt; o &gt; e &gt; i &gt; u &gt; ü</p>
        <p className="mt-1 italic">Examples:</p>
        <ul className="list-disc pl-6 mt-1">
          <li>
            <span className="text-red-500">hao → hǎo</span> (mark goes on "a")
          </li>
          <li>
            <span className="text-red-500">xue → xuě</span> (mark goes on "e")
          </li>
        </ul>
      </div>
    </li>

    <li>
      <div>
        <p>
          <strong>Special Spelling Rules:</strong> Some letters change based on context
        </p>
        <p className="mt-1">
          <span className="italic">ü → u</span> after j, q, x, y (e.g. <span className="text-red-500">ju = jü</span>)
        </p>
        <p className="mt-2">Standalone vowels are written with y/w:</p>
        <ul className="list-disc pl-6 mt-1">
          <li>
            <span className="text-red-500">yi = i</span>
          </li>
          <li>
            <span className="text-red-500">wu = u</span>
          </li>
          <li>
            <span className="text-red-500">yu = ü</span>
          </li>
        </ul>
      </div>
    </li>

    <li>
      <div>
        <p>
          <strong>Don’t Read Pinyin Like English:</strong> Some letters have unique sounds
        </p>
        <p className="mt-1 italic">Examples:</p>
        <ul className="list-disc pl-6 mt-1">
          <li>
            <span className="text-red-500">c = "ts"</span> (like "cats") → <span className="text-red-500">cài = tsài</span>
          </li>
          <li>
            <span className="text-red-500">x = "sh"</span> with spread lips → <span className="text-red-500">xīn = sheen</span>
          </li>
          <li>
            <span className="text-red-500">q = "ch"</span> but tighter → <span className="text-red-500">qì = chee</span>
          </li>
          <li>
            <span className="text-red-500">zh = "j"</span> like "jungle" → <span className="text-red-500">zhōng = jong</span>
          </li>
        </ul>
      </div>
    </li>
  </ol>
</div>
  ),
  "Hanzi & Stroke Order": (
      <div className="space-y-6">
  <h1 className="text-lg font-bold">Hanzi & Stroke Order (汉字和笔顺规则 hànzì hé bǐshùn guīzé)</h1>
  <p>
    Writing Chinese characters follows a specific stroke order, not freestyle. These rules help make writing
    <strong>faster</strong>, <strong>cleaner</strong>, and easier to remember — and they matter for fluency and exams.
  </p>

  <h2 className="font-semibold text-base">Basic Strokes You Need to Know</h2>
  <table className="table-auto border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border px-4 py-2">Stroke Name</th>
        <th className="border px-4 py-2">Hanzi</th>
        <th className="border px-4 py-2">Pinyin</th>
        <th className="border px-4 py-2">Meaning</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-4 py-2">横</td><td className="border px-4 py-2">一</td><td className="border px-4 py-2">héng</td><td className="border px-4 py-2">Horizontal</td></tr>
      <tr><td className="border px-4 py-2">竖</td><td className="border px-4 py-2">丨</td><td className="border px-4 py-2">shù</td><td className="border px-4 py-2">Vertical</td></tr>
      <tr><td className="border px-4 py-2">撇</td><td className="border px-4 py-2">丿</td><td className="border px-4 py-2">piě</td><td className="border px-4 py-2">Left-falling</td></tr>
      <tr><td className="border px-4 py-2">捺</td><td className="border px-4 py-2">㇏</td><td className="border px-4 py-2">nà</td><td className="border px-4 py-2">Right-falling</td></tr>
      <tr><td className="border px-4 py-2">点</td><td className="border px-4 py-2">丶</td><td className="border px-4 py-2">diǎn</td><td className="border px-4 py-2">Dot</td></tr>
      <tr><td className="border px-4 py-2">提</td><td className="border px-4 py-2">提</td><td className="border px-4 py-2">tí</td><td className="border px-4 py-2">Upward</td></tr>
      <tr><td className="border px-4 py-2">折</td><td className="border px-4 py-2">折</td><td className="border px-4 py-2">zhé</td><td className="border px-4 py-2">Turning</td></tr>
    </tbody>
  </table>

  <h2 className="text-base font-bold">Stroke Order Rules (写字规则)</h2>
  <ol className="list-decimal pl-6 space-y-4">
    <li>
      <div>
        <strong>Top to Bottom:</strong> Write upper parts first.
        <p className="mt-1">Example: 三 = 一 → 二 → 三</p>
      </div>
    </li>
    <li>
      <div>
        <strong>Left to Right:</strong> Do left components before right ones.
        <p className="mt-1">Example: 他 = 亻 → 也</p>
      </div>
    </li>
    <li>
      <div>
        <strong>Horizontal before Vertical:</strong> 横 comes before 竖 if they cross.
        <p className="mt-1">Example: 十 = 一 → 丨</p>
      </div>
    </li>
    <li>
      <div>
        <strong>Center before Sides:</strong> For symmetrical characters, middle first.
        <p className="mt-1">Example: 小 = 丨 → 丿 → ㇏</p>
      </div>
    </li>
    <li>
      <div>
        <strong>Enclosures first:</strong> Draw outer box first, then inside, then close.
        <p className="mt-1">Example: 回 = ⿴ → 内 → bottom close</p>
      </div>
    </li>
    <li>
      <div>
        <strong>Dots and extras last:</strong> Add tiny strokes at the very end.
        <p className="mt-1">Example: 玉 = 王 + 点</p>
      </div>
    </li>
    <li>
      <div>
        <strong>撇 before 捺:</strong> For slants, left-falling before right-falling.
        <p className="mt-1">Example: 人 = 丿 → ㇏</p>
      </div>
    </li>
    <li>
      <div>
        <strong>One Component at a Time:</strong> Complex characters follow order within each part.
        <p className="mt-1">Example: 谢 = 讠 → 身</p>
      </div>
    </li>
  </ol>

  <h2 className="text-base font-bold">Hanzi Structure Types</h2>
  <table className="table-auto border-collapse border border-gray-300">
    <thead>
      <tr>
        <th className="border px-4 py-2">Structure</th>
        <th className="border px-4 py-2">Description</th>
        <th className="border px-4 py-2">Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr><td className="border px-4 py-2">Left–Right</td><td className="border px-4 py-2">Two side-by-side parts</td><td className="border px-4 py-2">你, 他</td></tr>
      <tr><td className="border px-4 py-2">Top–Bottom</td><td className="border px-4 py-2">Stacked components</td><td className="border px-4 py-2">字, 安</td></tr>
      <tr><td className="border px-4 py-2">Enclosure</td><td className="border px-4 py-2">Outer box around content</td><td className="border px-4 py-2">国, 回</td></tr>
      <tr><td className="border px-4 py-2">Full-Wrap</td><td className="border px-4 py-2">3-sided wrap around inner</td><td className="border px-4 py-2">医, 厂</td></tr>
      <tr><td className="border px-4 py-2">Single</td><td className="border px-4 py-2">One-part characters</td><td className="border px-4 py-2">小, 大</td></tr>
    </tbody>
  </table>

  <h2 className="text-base font-bold">Tips for Learners</h2>
  <ul className="list-disc pl-6 space-y-2">
    <li>Use <strong>田字格</strong> grid paper to balance your characters.</li>
    <li>Practice on Skritter, Pleco, or YellowBridge for real-time stroke feedback.</li>
    <li>Even if you type, <strong>write by hand</strong> to reinforce memory.</li>
  </ul>
</div>
  ),
  "Sentence Structure": (
    <div>
      <h4>CORE SENTENCE STRUCTURE (SVO)</h4>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <h2>Subject + Time + Place + Manner + Verb + Object</h2>
            <p> It’s how Mandarin flows most naturally.</p>
            <span>Example:</span>
            <p>我 昨天 在家 认真地 做 作业。</p>
            <p>wǒ zuótiān zài jiā rènzhēn de zuò zuòyè.</p>
            <p>= I did my homework seriously at home yesterday.</p>
            <ul className="list-disc">
              <div>
                <p>🔁 In order:</p>
              </div>
              <li>
                <div>
                  Time: <span>昨天</span>
                </div>
              </li>
              <li>
                <div>
                  Place: <span>在家</span>
                </div>
              </li>
              <li>
                <div>
                  Manner: <span>认真地</span>
                </div>
              </li>
              <li>
                <div>
                  Verb: <span>做</span>
                </div>
              </li>
              <li>
                <div>
                  Object: <span>作业</span>
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2>Simple SVO Subject + Verb + Object </h2>
            <span>Examples: </span>
            <ul className="list-disc">
              <li>
                <div>
                  <span>我喜欢你。</span>= I like you.
                </div>
              </li>
              <li>
                <div>
                  <span>她吃米饭。</span>= She eats rice.{" "}
                </div>
              </li>
              <li>
                <div>
                  <span>我学中文。</span>= I study Chinese.{" "}
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2>Negation: “不” or “没” comes before the verb</h2>
            <p>不 = “not” (general / future / habitual)</p>
            <p>没 = “didn’t” (past actions) </p>
            <span>Examples: </span>
            <ul>
              <li>
                <div>
                  <span>我不吃肉。</span>= I don't eat meat.
                </div>
              </li>
              <li>
                <div>
                  <span>我没去学校。</span>= I didn’t go to school.
                </div>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <h2>
              Question = Statement + 吗 Turn any statement into a question by
              adding 吗 (ma) at the end.
            </h2>
            <span>Example: </span>
            <span>你喜欢她。→ 你喜欢她吗？</span>
            <p>= Do you like her?</p>
            <h2>OR use question words like:</h2>
            <span>
              什么 (what), 谁 (who), 哪 (which), 几 (how many), 怎么 (how){" "}
            </span>
            <span>Example:</span>
            <span>你为什么学习汉语？</span>
            <p>= Why do you study Chinese?</p>
          </div>
        </li>

        <li>
          <div>
            <h2>“有” for “to have” and “there is”</h2>
            <span>我有两个姐姐。</span>
            <p>= I have two older sisters.</p>
            <span>这里有人吗？</span>
            <p>= Is there someone here? </p>
            <h2>Use 没有 to negate:</h2>
            <span>我没有钱。</span>
            <p>= I don’t have money.</p>
          </div>
        </li>

        <li>
          <div>
            <h2>
              Topic-Comment Structure Mandarin loves to put the topic first,
              then describe it.
            </h2>
            <span>Example: </span>
            <span>这个电影，我不喜欢。</span>
            <p>= This movie, I don’t like.</p>
            <span>中文，很多人觉得难。</span>
            <p>= Chinese, many people think it’s hard.</p>
          </div>
        </li>

        <li>
          <div>
            <h2>
              Serial Verb Construction Back-to-back verbs, no "and" needed.
            </h2>
            <span>Example: </span>
            <span>我去超市买菜。</span>
            <p>= I go to the supermarket (to) buy groceries.</p>
            <span>他回家做饭。</span>
            <p>= He goes home (to) cook.</p>
          </div>
        </li>

        <li>
          <div>
            <h2>
              <span className="font-semibold">的 / 得 / 地</span> Modifiers
            </h2>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <div>
                  <p>
                    <span> 的 (de)</span>= connects noun adjectives
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <span>得 (de)</span>= connects verbs to degree complements
                  </p>
                </div>
              </li>
              <li>
                <div>
                  <p>
                    <span>地 (de)</span>= connects adverbs to verbs
                  </p>
                </div>
              </li>
            </ol>

            <span>Examples:</span>
            <ul className="list-disc">
              <li>
                <div className="flex">
                  <span>漂亮的女孩</span>
                  <p>= pretty girl</p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span>他跑得很快</span>
                  <p>= he runs fast</p>
                </div>
              </li>
              <li>
                <div className="flex">
                  <span>他认真地学习</span>
                  <p>
                    = he studies seriously (They all sound the same but are
                    written differently depending on what you're modifying)
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  "Particles": (
    <div className="space-y-6">
      <h1 className="text-lg font-bold">Mandarin Particles (助词 zhùcí)</h1>
      <p>
        Particles are function words. They don’t hold standalone meaning but
        affect the <strong>tone</strong>, <strong>grammar</strong>, or{" "}
        <strong>structure</strong> of a sentence.
      </p>

      <h2 className="font-semibold text-base">3 Types of Particles</h2>
      <ol className="list-decimal pl-6 space-y-3">
        <li>
          <div>
            <strong>Modal (语气助词)</strong> – affect tone/attitude
            <p className="mt-1">
              Examples:{" "}
              <span className="font-semibold text-red-500">
                吗, 呢, 吧, 啊, 呀, 嘛
              </span>
            </p>
          </div>
        </li>
        <li>
          <div>
            <strong>Aspect (动态助词)</strong> – indicate verb aspect
            <p className="mt-1">
              Examples:{" "}
              <span className="font-semibold text-red-500">了, 过, 着</span>
            </p>
          </div>
        </li>
        <li>
          <div>
            <strong>Structural (结构助词)</strong> – show grammatical
            relationship
            <p className="mt-1">
              Examples:{" "}
              <span className="font-semibold text-red-500">的, 得, 地</span>
            </p>
          </div>
        </li>
      </ol>

      <h2 className="text-base font-bold">
        Modal Particles – Change Tone / Attitude
      </h2>
      <ol className="list-decimal pl-6 space-y-6">
        <li>
          <div>
            <p>
              <strong>吗 (ma)</strong> – Yes/No question marker
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">你喜欢汉语。</span> = You like
                Chinese.
              </li>
              <li>
                <span className="text-red-500">你喜欢汉语吗？</span> = Do you
                like Chinese?
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>
              Add it at the end of a statement.{" "}
              <strong>Not used with question words</strong> like{" "}
              <span className="text-red-500">谁</span> (who),{" "}
              <span className="text-red-500">什么</span> (what).
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>呢 (ne)</strong> – Bounce-back question or ongoing action
              marker
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">我喜欢你，你呢？</span> = I like
                you. What about you?
              </li>
              <li>
                <span className="text-red-500">他在吃饭呢。</span> = He’s eating
                (right now).
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>
              Used to bounce back a question ("what about…?") or show something
              ongoing.
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>吧 (ba)</strong> – Suggestion, assumption, or soft command
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">我们走吧！</span> = Let’s go!
              </li>
              <li>
                <span className="text-red-500">你是新生吧？</span> = You’re a
                new student, right?
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>Makes the sentence more casual, polite, or tentative.</p>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>啊 (a) / 呀 (ya) / 嘛 (ma)</strong> – Emotive emphasis
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">好啊！</span> = Great!
              </li>
              <li>
                <span className="text-red-500">快点儿嘛！</span> = Come on,
                hurry up!
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>
              These add <strong>emotion</strong> — excitement, emphasis, or
              persuasion. <span className="text-red-500">呀</span> is a soft
              “ah” after vowels. <span className="text-red-500">嘛</span> adds a
              sassy or insistent tone.
            </p>
          </div>
        </li>
      </ol>

      <h2 className="text-base font-bold">
        Aspect Particles – Indicate Verb Completion or Experience
      </h2>
      <ol className="list-decimal pl-6 space-y-6">
        <li>
          <div>
            <p>
              <strong>了 (le)</strong> – Completed action or change
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">我吃了饭。</span> = I ate.
              </li>
              <li>
                <span className="text-red-500">天气冷了。</span> = It’s gotten
                cold.
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>
              Goes after the verb (for completed action) or at the sentence end
              (for change).
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>过 (guo)</strong> – Indicates life experience
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">我去过中国。</span> = I’ve been
                to China.
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>
              Goes after the verb. Doesn’t say *when* — just that it happened
              before.
            </p>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>着 (zhe)</strong> – Ongoing state or result
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">门开着。</span> = The door is
                open.
              </li>
              <li>
                <span className="text-red-500">他笑着说话。</span> = He spoke
                while smiling.
              </li>
            </ul>
            <p className="mt-2 font-medium">Note:</p>
            <p>
              Goes after the verb. Often paired with another verb for parallel
              actions.
            </p>
          </div>
        </li>
      </ol>

      <h2 className="text-base font-bold">
        Structural Particles – Grammar Glue
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>的 (de)</strong> – Links nouns to adjectives (e.g.,{" "}
          <span className="text-red-500">漂亮的女孩</span> = pretty girl)
        </li>
        <li>
          <strong>得 (de)</strong> – Links verbs to adverbs (e.g.,{" "}
          <span className="text-red-500">跑得快</span> = run fast)
        </li>
        <li>
          <strong>地 (de)</strong> – Turns adjectives into adverbs (e.g.,{" "}
          <span className="text-red-500">认真地听</span> = listen attentively)
        </li>
      </ul>
    </div>
  ),
  "Measure Words":(
    <div className="space-y-6">
      <h1 className="text-lg font-bold">Mandarin Measure Words (量词 liàngcí)</h1>
      <p>
        You <strong>can’t count nouns</strong> directly in Mandarin. You must use a measure word
        between the number and the noun.
      </p>

      <h2 className="font-semibold text-base">Basic Pattern</h2>
      <p>
        <strong>[Number/Amount] + [Measure Word] + [Noun]</strong>
      </p>
      <ul className="list-disc pl-6">
        <li><span className="text-red-500">一个人</span> = one person</li>
        <li><span className="text-red-500">三本书</span> = three books</li>
        <li><span className="text-red-500">五只猫</span> = five cats</li>
      </ul>

      <h2 className="font-semibold text-base">Key Rules</h2>
      <ol className="list-decimal pl-6 space-y-6">
        <li>
          <div>
            <p>
              <strong>Use a measure word between numbers/demonstratives and nouns</strong>
            </p>
            <table className="table-auto mt-2">
              <thead>
                <tr><th className="pr-6">✅ Correct</th><th>❌ Wrong</th></tr>
              </thead>
              <tbody>
                <tr><td>一个苹果</td><td>一苹果</td></tr>
                <tr><td>那本书</td><td>那书</td></tr>
                <tr><td>三条鱼</td><td>三鱼</td></tr>
              </tbody>
            </table>
          </div>
        </li>

        <li>
          <div>
            <p><strong>Different nouns use different measure words</strong></p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>一<span className="text-red-500">个</span>人 (general things)</li>
              <li>一<span className="text-red-500">本</span>书 (books)</li>
              <li>一<span className="text-red-500">只</span>狗 (animals)</li>
              <li>一<span className="text-red-500">条</span>蛇 (long objects)</li>
              <li>一<span className="text-red-500">件</span>衣服 (clothing)</li>
              <li>一<span className="text-red-500">台</span>电脑 (machines)</li>
              <li>一<span className="text-red-500">辆</span>车 (vehicles)</li>
              <li>一<span className="text-red-500">瓶</span>水 (bottles)</li>
              <li>一<span className="text-red-500">杯</span>茶 (cups)</li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p><strong>个 is the default/general measure word</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li>一个朋友</li>
              <li>那个人</li>
              <li>哪个学生</li>
            </ul>
            <p className="mt-2 text-sm">Use it when unsure, but don’t overuse it.</p>
          </div>
        </li>

        <li>
          <div>
            <p><strong>Even demonstratives need measure words</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li>这本书 = this book</li>
              <li>那只猫 = that cat</li>
              <li>哪辆车 = which car</li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p><strong>Measure words are also used for verbs/actions</strong></p>
            <ul className="list-disc pl-6 mt-2">
              <li>一次 = one time (次 - general)</li>
              <li>三遍 = three times (遍 - full)</li>
              <li>两下 = two times casually (下 - quick)</li>
            </ul>
          </div>
        </li>
      </ol>

      <h2 className="text-base font-bold">Categories of Measure Words</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li><strong>Default / General:</strong> 个 (gè)</li>
        <li><strong>Shape-Based:</strong> 本 (books), 张 (flat), 条 (long)</li>
        <li><strong>Living Things:</strong> 只 (animals), 匹 (horses)</li>
        <li><strong>Containers:</strong> 杯 (cups), 瓶 (bottles), 碗 (bowls), 盒 (boxes)</li>
        <li><strong>Objects:</strong> 台 (machines), 辆 (vehicles), 把 (handle-based)</li>
        <li><strong>Verbal:</strong> 次, 遍, 下</li>
      </ul>

      <h2 className="text-base font-bold">Common Mistakes</h2>
      <table className="table-auto">
        <thead>
          <tr><th className="pr-6">Mistake</th><th className="pr-6">Why</th><th>Correction</th></tr>
        </thead>
        <tbody>
          <tr><td>三书</td><td>No measure word</td><td>三本书</td></tr>
          <tr><td>一狗</td><td>Animals need classifier</td><td>一只狗</td></tr>
          <tr><td>那苹果</td><td>Missing after demonstrative</td><td>那个苹果</td></tr>
          <tr><td>我看电影两次</td><td>Wrong word order</td><td>我看了两次电影</td></tr>
        </tbody>
      </table>

      <h2 className="text-base font-bold">Recap Rules</h2>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Always use a measure word with numbers/demonstratives</li>
        <li>Choose based on category (shape, usage, etc.)</li>
        <li>Use 个 when unsure (but avoid overuse)</li>
        <li>Use MWs with 这 / 那 / 哪</li>
        <li>Use verbal MWs when describing frequency</li>
      </ol>
    </div>
  ),
  "Verb Tense Markers": (
    <div className="space-y-6">
      <p>
        Mandarin cares more about whether an action is{" "}
        <strong>complete, ongoing, repeated, or experienced</strong> — not when
        exactly it happened. Instead of changing the verb itself, Chinese uses
        particles and time words.
      </p>

      <h2 className="text-lg font-semibold">Main Verb Aspect Markers</h2>
      <p>Here are the 3 tense-like markers every learner should know:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <strong>了 (le)</strong> – Completed action / change
        </li>
        <li>
          <strong>过 (guo)</strong> – Past experience
        </li>
        <li>
          <strong>着 (zhe)</strong> – Ongoing state
        </li>
      </ul>

      <ol className="list-decimal pl-6 space-y-6">
        <li>
          <div>
            <h3 className="font-bold text-base mb-1">
              了 (le) – Completion or Change
            </h3>
            <p className="font-medium">Action is done:</p>
            <p>
              <span className="text-red-500">我吃了饭。</span> = I ate.
            </p>
            <p className="font-medium mt-2">Change in state:</p>
            <p>
              <span className="text-red-500">天气冷了。</span> = It’s gotten
              cold.
            </p>
            <p className="mt-2 font-semibold">Note:</p>
            <ul className="list-disc pl-6">
              <li>
                Goes <strong>after the verb</strong> for completed actions.
              </li>
              <li>
                Goes <strong>at sentence end</strong> for state change.
              </li>
              <li>
                <span className="italic">
                  Don’t overuse "了" — only use when emphasizing completion or
                  change.
                </span>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <h3 className="font-bold text-base mb-1">
              过 (guo) – Life Experience / “Ever Done It”
            </h3>
            <p className="font-medium">
              Used to show past experiences you’ve had:
            </p>
            <p>
              <span className="text-red-500">我看过那部电影。</span> = I’ve seen
              that movie.
            </p>
            <p className="mt-2 font-semibold">Note:</p>
            <ul className="list-disc pl-6">
              <li>
                Placed <strong>after the verb</strong>.
              </li>
              <li>
                Often paired with <span className="text-red-500">曾经</span>{" "}
                (céngjīng) or <span className="text-red-500">以前</span>{" "}
                (yǐqián) for clarity.
              </li>
              <li>It emphasizes experience, not time.</li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <h3 className="font-bold text-base mb-1">
              着 (zhe) – Ongoing Action / State
            </h3>
            <p className="font-medium">Describes ongoing or static states:</p>
            <p>
              <span className="text-red-500">他笑着说话。</span> = He spoke
              while smiling.
            </p>
            <p>
              <span className="text-red-500">门开着。</span> = The door is open.
            </p>
            <p className="mt-2 font-semibold">Note:</p>
            <ul className="list-disc pl-6">
              <li>
                Placed <strong>after the verb</strong>.
              </li>
              <li>
                Often combines with another verb to show ongoing action with
                something else happening.
              </li>
              <li>
                It’s like “-ing,” but passive: describing the state of something
                as it stays that way.
              </li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  "Negation": (
    <div className="space-y-8">
      <p>
        Mandarin doesn’t use “not” or “no” like English — it uses specific
        negative words depending on tense, verb type, and tone.
      </p>

      <ol className="list-decimal pl-6 space-y-8">
        {/* 1. 不 */}
        <li>
          <h2 className="text-lg font-semibold">
            Use 不 (bù) for General, Habitual, or Future Negation
          </h2>
          <p className="font-medium">Usage Examples:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>我不吃肉。= I don’t eat meat.</li>
            <li>我不想去。= I don’t want to go.</li>
            <li>明天我不上班。= I won’t work tomorrow.</li>
          </ul>
          <p className="mt-2 font-medium">Notes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Always goes before the verb.</li>
            <li>
              Used for present/future habits, refusals, or permanent truths.
            </li>
            <li>
              <strong>Pro Tip:</strong> "不" is flat, almost firm — like drawing
              a boundary.
            </li>
          </ul>
        </li>

        {/* 2. 没 */}
        <li>
          <h2 className="text-lg font-semibold">
            Use 没 (méi) for Past or Nonexistence
          </h2>
          <p className="font-medium">Usage Examples:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>我没吃饭。= I didn’t eat.</li>
            <li>她没来。= She didn’t come.</li>
            <li>我没有钱。= I don’t have money.</li>
          </ul>
          <p className="mt-2 font-medium">Notes:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Always goes before the verb.</li>
            <li>"没有" (méi yǒu) is the negative of "有" (have).</li>
            <li>
              Think of 没 as the past-tense "nope" or “haven’t done it yet.”
            </li>
          </ul>
        </li>

        {/* 3. 不 vs 没 */}
        <li>
          <h2 className="text-lg font-semibold">
            Don’t Mix 不 and 没 Interchangeably
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-left">
              <thead className="bg-gray-100 dark:bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 border">Sentence</th>
                  <th className="px-4 py-2 border">Correct?</th>
                  <th className="px-4 py-2 border">Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">我没吃饭。</td>
                  <td className="px-4 py-2 border">✅</td>
                  <td className="px-4 py-2 border">Past negation</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">我不吃饭。</td>
                  <td className="px-4 py-2 border">✅</td>
                  <td className="px-4 py-2 border">General/habitual</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">我不有钱。</td>
                  <td className="px-4 py-2 border">❌</td>
                  <td className="px-4 py-2 border">“有” must use 没/没有</td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>

        {/* 4. 有 always uses 没 */}
        <li>
          <h2 className="text-lg font-semibold">
            The Verb 有 (yǒu) is Always Negated with 没
          </h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>我没有时间。= I don’t have time.</li>
            <li>他没有女朋友。= He doesn’t have a girlfriend.</li>
          </ul>
          <p className="mt-2">
            <strong>Note:</strong> Never use 不有 ❌. It’s not a thing.
          </p>
        </li>

        {/* 5. 不 + adjectives / modals */}
        <li>
          <h2 className="text-lg font-semibold">
            Use 不 with Adjectives and Modal Verbs
          </h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-left">
              <thead className="bg-gray-100 dark:bg-gray-800">
                <tr>
                  <th className="px-4 py-2 border">Word</th>
                  <th className="px-4 py-2 border">Use Like</th>
                  <th className="px-4 py-2 border">Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">会</td>
                  <td className="px-4 py-2 border">can/will</td>
                  <td className="px-4 py-2 border">我不会说法语。</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">想</td>
                  <td className="px-4 py-2 border">want</td>
                  <td className="px-4 py-2 border">我不想去。</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">是</td>
                  <td className="px-4 py-2 border">to be</td>
                  <td className="px-4 py-2 border">他不是老师。</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mt-2">
            <strong>Note:</strong> "不" is the go-to for verbs that express
            intent, possibility, or identity.
          </p>
        </li>

        {/* 6. Double Negatives */}
        <li>
          <h2 className="text-lg font-semibold">
            Double Negatives = Positive or Emphasis
          </h2>
          <p>
            我不是不知道。= “It’s not that I don’t know.” (aka "Of course I
            know.")
          </p>
          <p className="mt-2">
            <strong>Note:</strong> Double negatives exist for dramatic or
            emotional emphasis.
          </p>
        </li>

        {/* 7. Negation + 了 */}
        <li>
          <h2 className="text-lg font-semibold">"了" + Negation = Tricky</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>❌ 我没吃了</li>
            <li>✅ 我没吃</li>
            <li>✅ 我吃了</li>
          </ul>
        </li>
      </ol>

      {/* BONUS Section */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">BONUS: Other Negative Words</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border">Word</th>
                <th className="px-4 py-2 border">Meaning</th>
                <th className="px-4 py-2 border">Example</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">别</td>
                <td className="px-4 py-2 border">Don’t (command)</td>
                <td className="px-4 py-2 border">别说话！</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">不行</td>
                <td className="px-4 py-2 border">Not okay / won’t do</td>
                <td className="px-4 py-2 border">这样不行！</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">不要</td>
                <td className="px-4 py-2 border">Don’t want / Stop</td>
                <td className="px-4 py-2 border">不要笑！</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">没事</td>
                <td className="px-4 py-2 border">It’s nothing / I’m good</td>
                <td className="px-4 py-2 border">没事，我没受伤。</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Cheat Sheet */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Negation Cheat Sheet:</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-2 border">Scenario</th>
                <th className="px-4 py-2 border">Use</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border">Habit / Future / General</td>
                <td className="px-4 py-2 border">不</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Past / Not happened yet</td>
                <td className="px-4 py-2 border">没</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Don’t have</td>
                <td className="px-4 py-2 border">没有</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">“Don’t do that!”</td>
                <td className="px-4 py-2 border">别</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Negative commands</td>
                <td className="px-4 py-2 border">不要 / 别</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border">Polite refusal</td>
                <td className="px-4 py-2 border">不好意思</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  ),
  "Pronouns": (
    <div className="space-y-6 text-gray-800 text-sm leading-relaxed">
      <h2 className="text-xl font-semibold text-gray-900">
        📘 Grammar Rules → Pronouns (代词 dàicí)
      </h2>
      <p>
        Mandarin pronouns don’t change based on case like in English
        (I/me/my/mine). They stay the same form — context does the heavy
        lifting.
      </p>

      <h3 className="text-lg font-semibold">👤 Personal Pronouns</h3>
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">English</th>
            <th className="px-4 py-2 border">Mandarin</th>
            <th className="px-4 py-2 border">Pinyin</th>
            <th className="px-4 py-2 border">Notes</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["I / me", "我", "wǒ", "Used for both subject & object"],
            ["You", "你", "nǐ", "Informal “you”"],
            ["He / him", "他", "tā", "Male"],
            ["She / her", "她", "tā", "Female — same pronunciation as 他"],
            ["It", "它", "tā", "For animals/things"],
            ["We / us", "我们", "wǒmen", "Plural of 'I'"],
            ["You all", "你们", "nǐmen", "Plural of 'you'"],
            ["They", "他们", "tāmen", "All males or mixed gender group"],
            ["They (fem.)", "她们", "tāmen", "Group of only females"],
            ["They (things)", "它们", "tāmen", "Group of things/animals"],
          ].map(([eng, hanzi, pinyin, note], idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border">{eng}</td>
              <td className="px-4 py-2 border">{hanzi}</td>
              <td className="px-4 py-2 border">{pinyin}</td>
              <td className="px-4 py-2 border">{note}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-lg font-semibold">🔁 Pronoun Rules</h3>
      <div className="space-y-4">
        <div>
          <h4 className="font-medium">1. No Case Changes</h4>
          <p>我 = I / me / mine — one form fits all.</p>
          <p className="italic">Example: 他爱我。= He loves me.</p>
        </div>

        <div>
          <h4 className="font-medium">2. Plural = Add “们” (men)</h4>
          <ul className="list-disc pl-5">
            <li>我 ➝ 我们 = we</li>
            <li>你 ➝ 你们 = you all</li>
            <li>他 ➝ 他们 = they</li>
          </ul>
          <p className="italic">Only used for people — not objects/animals.</p>
        </div>

        <div>
          <h4 className="font-medium">3. Gender is Only Written</h4>
          <p>
            他, 她, 它 all sound like “tā”. You’ll know the meaning from
            context.
          </p>
        </div>

        <div>
          <h4 className="font-medium">4. Used With Verbs Without Changing</h4>
          <p>Example: 我喜欢你。= I like you. / 他们帮我们。= They help us.</p>
        </div>

        <div>
          <h4 className="font-medium">5. Polite “You” = 您 (nín)</h4>
          <p>Use this to show respect. Example: 您好 = polite “hello”</p>
        </div>

        <div>
          <h4 className="font-medium">6. Possessives = Add 的 (de)</h4>
          <table className="min-w-full border text-left mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">English</th>
                <th className="px-4 py-2 border">Mandarin</th>
                <th className="px-4 py-2 border">Note</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["My", "我的", "wǒ de = my/mine"],
                ["Your", "你的", "nǐ de = your/yours"],
                ["His", "他的", "tā de = his"],
                ["Our", "我们的", "wǒmen de = our/ours"],
              ].map(([eng, hanzi, note], i) => (
                <tr key={i}>
                  <td className="px-4 py-2 border">{eng}</td>
                  <td className="px-4 py-2 border">{hanzi}</td>
                  <td className="px-4 py-2 border">{note}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="italic mt-1">
            Drop 的 in casual settings: 我妈妈 = my mom
          </p>
        </div>

        <div>
          <h4 className="font-medium">📦 Reflexive Pronouns = 自己 (zìjǐ)</h4>
          <table className="min-w-full border text-left mt-2">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-2 border">Phrase</th>
                <th className="px-4 py-2 border">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["我自己", "myself"],
                ["你自己", "yourself"],
                ["他们自己", "themselves"],
              ].map(([phrase, meaning], i) => (
                <tr key={i}>
                  <td className="px-4 py-2 border">{phrase}</td>
                  <td className="px-4 py-2 border">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="italic mt-1">Example: 我自己做的。= I did it myself.</p>
        </div>
      </div>

      <h3 className="text-lg font-semibold">👀 Pronoun Summary Chart</h3>
      <table className="min-w-full border border-gray-300 text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 border">Pronoun</th>
            <th className="px-4 py-2 border">Plural</th>
            <th className="px-4 py-2 border">Possessive</th>
            <th className="px-4 py-2 border">Polite</th>
          </tr>
        </thead>
        <tbody>
          {[
            ["我 (wǒ)", "我们", "我的", "—"],
            ["你 (nǐ)", "你们", "你的", "您 (nín)"],
            ["他 (tā)", "他们", "他的", "—"],
            ["她 (tā)", "她们", "她的", "—"],
            ["它 (tā)", "它们", "它的", "—"],
          ].map(([p, pl, pos, pol], idx) => (
            <tr key={idx}>
              <td className="px-4 py-2 border">{p}</td>
              <td className="px-4 py-2 border">{pl}</td>
              <td className="px-4 py-2 border">{pos}</td>
              <td className="px-4 py-2 border">{pol}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  ),
  "Question Words": (
    <div className="space-y-6">
      <h1 className="text-lg font-bold">
        Mandarin Question Words (疑问词 yíwèncí)
      </h1>
      <p>
        In Mandarin, question words replace the part of the sentence you're
        asking about — the rest of the sentence structure stays mostly the same.
      </p>

      <h2 className="font-semibold text-base">Core Sentence Structure</h2>
      <p>
        Mandarin uses a normal statement structure even in questions: <br />
        <strong>
          Subject + Time + Place + [Question Word] + Verb + Object
        </strong>
      </p>
      <p>
        You just drop the question word in where the answer would normally go.
        No need to move stuff around like in English.
      </p>

      <h2 className="text-base font-bold">Essential Question Words</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong>什么 (shénme)</strong> – What (e.g.,{" "}
          <span className="text-red-500">你在看什么？</span> = What are you
          watching?)
        </li>
        <li>
          <strong>谁 (shéi)</strong> – Who (e.g.,{" "}
          <span className="text-red-500">谁是你的老师？</span> = Who is your
          teacher?)
        </li>
        <li>
          <strong>哪里 / 哪儿 (nǎlǐ / nǎr)</strong> – Where (e.g.,{" "}
          <span className="text-red-500">你要去哪里？</span> = Where are you
          going?)
        </li>
        <li>
          <strong>什么时候 (shénme shíhou)</strong> – When (e.g.,{" "}
          <span className="text-red-500">你什么时候来？</span> = When are you
          coming?)
        </li>
        <li>
          <strong>为什么 (wèishénme)</strong> – Why (e.g.,{" "}
          <span className="text-red-500">你为什么哭？</span> = Why are you
          crying?)
        </li>
        <li>
          <strong>怎么 (zěnme)</strong> – How / Why (e.g.,{" "}
          <span className="text-red-500">你怎么去学校？</span> = How do you get
          to school?)
        </li>
        <li>
          <strong>哪 / 哪个 (nǎ / nǎge)</strong> – Which (e.g.,{" "}
          <span className="text-red-500">你喜欢哪个电影？</span> = Which movie
          do you like?)
        </li>
        <li>
          <strong>哪些 (nǎxiē)</strong> – Which ones (plural) (e.g.,{" "}
          <span className="text-red-500">你看过哪些电影？</span> = Which movies
          have you seen?)
        </li>
      </ul>

      <h2 className="text-base font-bold">Quick Rules & Tips</h2>
      <ol className="list-decimal pl-6 space-y-6">
        <li>
          <div>
            <p>
              <strong>Don’t change the word order</strong> – Just insert the
              question word where the answer would go.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">你在看电影。</span> →{" "}
                <span className="text-red-500">你在看什么？</span>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>Question words don’t mix with 吗</strong> – That’s a
              redundancy error.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="line-through text-gray-500">
                  你喜欢什么吗？
                </span>
              </li>
              <li>
                <span className="text-red-500">你喜欢什么？</span> ✅
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>怎么 (zěnme)</strong> has 3 uses:
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                How (manner) →{" "}
                <span className="text-red-500">你怎么写这个字？</span>
              </li>
              <li>
                Why (casual) →{" "}
                <span className="text-red-500">你怎么不说话？</span>
              </li>
              <li>
                How come (vibe check) →{" "}
                <span className="text-red-500">你怎么来了？</span>
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>谁 (shéi)</strong> can be subject or object
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">谁是老师？</span> = Who is the
                teacher?
              </li>
              <li>
                <span className="text-red-500">你看见谁了？</span> = Who did you
                see?
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>什么时候 (shénme shíhou)</strong> always refers to time —
              just place it where a time phrase would go.
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">你什么时候去？</span>
              </li>
              <li>
                <span className="text-red-500">老师什么时候来？</span>
              </li>
            </ul>
          </div>
        </li>
      </ol>

      <h2 className="text-base font-bold">Combo Questions</h2>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="text-red-500">你为什么想去那个地方？</span> = Why do
          you want to go to that place?
        </li>
        <li>
          <span className="text-red-500">谁在什么时候打电话给你？</span> = Who
          called you and when?
        </li>
      </ul>

      <h2 className="text-base font-bold">Common Mistakes to Avoid</h2>
      <ul className="list-disc pl-6 space-y-2 text-red-500">
        <li>❌ 你喜欢什么吗？ → ✅ 你喜欢什么？</li>
        <li>❌ 什么是你吃的？ → ✅ 你吃的是什么？</li>
        <li>❌ 哪里你去？ → ✅ 你去哪里？</li>
      </ul>

      <h2 className="text-base font-bold">Summary Table</h2>
      <table className="table-auto border mt-4 text-sm">
        <thead>
          <tr>
            <th className="border px-2 py-1">Word</th>
            <th className="border px-2 py-1">Pinyin</th>
            <th className="border px-2 py-1">Meaning</th>
            <th className="border px-2 py-1">Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-2 py-1">什么</td>
            <td className="border px-2 py-1">shénme</td>
            <td className="border px-2 py-1">What</td>
            <td className="border px-2 py-1">你吃什么？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">谁</td>
            <td className="border px-2 py-1">shéi</td>
            <td className="border px-2 py-1">Who</td>
            <td className="border px-2 py-1">谁在说话？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">哪里 / 哪儿</td>
            <td className="border px-2 py-1">nǎlǐ / nǎr</td>
            <td className="border px-2 py-1">Where</td>
            <td className="border px-2 py-1">他住在哪儿？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">什么时候</td>
            <td className="border px-2 py-1">shénme shíhou</td>
            <td className="border px-2 py-1">When</td>
            <td className="border px-2 py-1">你什么时候来？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">为什么</td>
            <td className="border px-2 py-1">wèishénme</td>
            <td className="border px-2 py-1">Why</td>
            <td className="border px-2 py-1">你为什么不说？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">怎么</td>
            <td className="border px-2 py-1">zěnme</td>
            <td className="border px-2 py-1">How / Why</td>
            <td className="border px-2 py-1">你怎么知道的？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">哪个</td>
            <td className="border px-2 py-1">nǎge</td>
            <td className="border px-2 py-1">Which (one)</td>
            <td className="border px-2 py-1">你喜欢哪个？</td>
          </tr>
          <tr>
            <td className="border px-2 py-1">哪些</td>
            <td className="border px-2 py-1">nǎxiē</td>
            <td className="border px-2 py-1">Which (ones)</td>
            <td className="border px-2 py-1">你看过哪些电影？</td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
  "Numbers & Counting": (
    <div className="space-y-6">
      <h1 className="text-lg font-bold">数字 (Numbers & Counting)</h1>
      <p>
        Mandarin numbers are logical and based on a regular base-10 system. Once
        you learn the patterns, you can count almost anything.
      </p>

      <h2 className="font-semibold text-base">Basic Numbers (0–10)</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="text-red-500">0</span> = 零 (líng)
        </li>
        <li>
          <span className="text-red-500">1</span> = 一 (yī)
        </li>
        <li>
          <span className="text-red-500">2</span> = 二 (èr)
        </li>
        <li>
          <span className="text-red-500">3</span> = 三 (sān)
        </li>
        <li>
          <span className="text-red-500">4</span> = 四 (sì)
        </li>
        <li>
          <span className="text-red-500">5</span> = 五 (wǔ)
        </li>
        <li>
          <span className="text-red-500">6</span> = 六 (liù)
        </li>
        <li>
          <span className="text-red-500">7</span> = 七 (qī)
        </li>
        <li>
          <span className="text-red-500">8</span> = 八 (bā)
        </li>
        <li>
          <span className="text-red-500">9</span> = 九 (jiǔ)
        </li>
        <li>
          <span className="text-red-500">10</span> = 十 (shí)
        </li>
      </ul>

      <h2 className="font-semibold text-base">Numbers 11–99</h2>
      <p>
        Pattern: <strong>[Tens digit] + 十 + [Ones digit]</strong>
      </p>
      <ul className="list-disc pl-6 space-y-1 mt-1">
        <li>
          <span className="text-red-500">11</span> = 十一 (shí yī)
        </li>
        <li>
          <span className="text-red-500">24</span> = 二十四 (èr shí sì)
        </li>
        <li>
          <span className="text-red-500">39</span> = 三十九 (sān shí jiǔ)
        </li>
        <li>
          <span className="text-red-500">99</span> = 九十九 (jiǔ shí jiǔ)
        </li>
      </ul>
      <p className="mt-2">
        <strong>Rule:</strong> If there's no ones digit, drop it. e.g.{" "}
        <span className="text-red-500">40</span> = 四十
      </p>

      <h2 className="font-semibold text-base">🔁 Special Case: 两 (liǎng)</h2>
      <p>
        Use <span className="text-red-500">两</span> instead of 二 when talking
        about quantities, time, or measure words.
      </p>
      <ul className="list-disc pl-6 mt-1 space-y-1">
        <li>
          <span className="text-red-500">两个人</span> = Two people
        </li>
        <li>
          <span className="text-red-500">两点</span> = Two o'clock
        </li>
        <li>
          <span className="text-red-500">二楼</span> = Second floor
        </li>
      </ul>
      <p>
        <strong>Note:</strong> Use <span className="text-red-500">二</span> for
        counting, <span className="text-red-500">两</span> for quantifying.
      </p>

      <h2 className="font-semibold text-base">
        Hundreds, Thousands, Ten-Thousands
      </h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="text-red-500">100</span> = 一百 (yī bǎi)
        </li>
        <li>
          <span className="text-red-500">101</span> = 一百零一 (yī bǎi líng yī)
        </li>
        <li>
          <span className="text-red-500">215</span> = 二百一十五 (èr bǎi yī shí
          wǔ)
        </li>
        <li>
          <span className="text-red-500">1,000</span> = 一千 (yī qiān)
        </li>
        <li>
          <span className="text-red-500">10,000</span> = 一万 (yī wàn)
        </li>
      </ul>
      <p className="mt-2">
        <strong>Note:</strong> Use <span className="text-red-500">零</span> to
        fill in missing digits. Numbers are grouped by ten-thousands — e.g.,{" "}
        <span className="text-red-500">100,000</span> = 十万 (shí wàn), not "a
        hundred thousand".
      </p>

      <h2 className="font-bold text-base">Summary</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="text-red-500">零</span> is used to skip digits (e.g.
          105 = 一百零五).
        </li>
        <li>
          <span className="text-red-500">两</span> is for quantities;{" "}
          <span className="text-red-500">二</span> is for counting.
        </li>
        <li>
          Chinese uses <strong>10,000</strong> as a base unit, not 1,000 like
          English.
        </li>
      </ul>

      <div className="space-y-2">
        <h2 className="text-base font-semibold">
          Pronouncing 1 as “yāo” in Phone Numbers
        </h2>
        <p>
          In spoken strings of digits like phone numbers or security codes, 一
          (1) is pronounced <strong>yāo</strong> — not yī.
        </p>
        <p>
          <strong>Why?</strong> "Yī" sounds too similar to "qī" (7), especially
          over bad connections. "Yāo" is clearer and sharper.
        </p>
        <p>
          <strong>Used in:</strong>
        </p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Phone numbers</li>
          <li>ID numbers</li>
          <li>Security codes</li>
          <li>Addresses with digit strings</li>
        </ul>
        <p>
          <strong>Not used in:</strong> Math, dates, or regular counting.
        </p>
        <p>
          <strong>Example:</strong> 131-4151-7189 →{" "}
          <span className="text-red-500">
            yāo sān yāo – sì yāo wǔ yāo – qī yāo bā jiǔ
          </span>
        </p>
      </div>

      <div className="space-y-2">
        <h2 className="text-base font-bold">Quick Summary</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>
            <strong>零</strong> fills gaps in numbers (e.g. 105 = 一百零五).
          </li>
          <li>
            <strong>两</strong> = quantities/time, <strong>二</strong> =
            counting/listing.
          </li>
          <li>Chinese groups large numbers by 10,000s (not 1,000s).</li>
          <li>
            <strong>一</strong> becomes <strong>yāo</strong> when clarity is
            needed in digit strings.
          </li>
        </ul>
      </div>
    </div>
  ),
  "Time & Dates": (
    <div className="space-y-6">
      <h1 className="text-lg font-bold">日期和时间 (Dates & Time)</h1>
      <p>
        Mandarin expresses time and dates from largest to smallest:{" "}
        <strong>year → month → day</strong>. It’s structured and simple.
      </p>

      <h2 className="font-semibold text-base">📅 Dates: Year, Month, Day</h2>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <p>
              <strong>Years:</strong> Say each digit separately, followed by{" "}
              <span className="text-red-500">年 (nián)</span>
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">2025年</span> = 二零二五年 (èr
                líng èr wǔ nián)
              </li>
              <li>
                <span className="text-red-500">1989年</span> = 一九八九年 (yī
                jiǔ bā jiǔ nián)
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>Months:</strong> Add{" "}
              <span className="text-red-500">月 (yuè)</span> after the number
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">一月</span> = January
              </li>
              <li>
                <span className="text-red-500">十二月</span> = December
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>Days:</strong> Add{" "}
              <span className="text-red-500">日 (rì)</span> for formal/written
              or <span className="text-red-500">号 (hào)</span> for spoken
            </p>
            <ul className="list-disc pl-6 mt-2">
              <li>
                <span className="text-red-500">一日</span> = 1st (formal)
              </li>
              <li>
                <span className="text-red-500">十五号</span> = 15th (spoken)
              </li>
            </ul>
          </div>
        </li>

        <li>
          <div>
            <p>
              <strong>Full Date Example:</strong>
            </p>
            <p className="mt-2">
              <span className="text-red-500">今天是 2025年6月11日。</span> =
              Today is June 11, 2025
            </p>
          </div>
        </li>
      </ol>

      <h2 className="font-semibold text-base">📆 Days of the Week</h2>
      <p>
        Pattern: <span className="text-red-500">星期 + number</span>
      </p>
      <ul className="list-disc pl-6 mt-2 space-y-1">
        <li>
          <span className="text-red-500">星期一</span> = Monday
        </li>
        <li>
          <span className="text-red-500">星期二</span> = Tuesday
        </li>
        <li>
          <span className="text-red-500">星期三</span> = Wednesday
        </li>
        <li>
          <span className="text-red-500">星期四</span> = Thursday
        </li>
        <li>
          <span className="text-red-500">星期五</span> = Friday
        </li>
        <li>
          <span className="text-red-500">星期六</span> = Saturday
        </li>
        <li>
          <span className="text-red-500">星期天 / 星期日</span> = Sunday
        </li>
      </ul>
      <p className="mt-2">
        <strong>Note:</strong> Sunday is irregular — uses{" "}
        <span className="text-red-500">天 (tiān)</span> or{" "}
        <span className="text-red-500">日 (rì)</span>
      </p>

      <h2 className="font-semibold text-base">⏰ Time Expressions</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          <span className="text-red-500">点 (diǎn)</span> = o’clock
        </li>
        <li>
          <span className="text-red-500">分 (fēn)</span> = minutes
        </li>
        <li>
          <span className="text-red-500">半 (bàn)</span> = half past
        </li>
        <li>
          <span className="text-red-500">上午 / 下午</span> = AM / PM
        </li>
      </ul>
      <p className="font-medium mt-2">Examples:</p>
      <ul className="list-disc pl-6 mt-1 space-y-1">
        <li>
          <span className="text-red-500">现在三点半。</span> = It’s 3:30.
        </li>
        <li>
          <span className="text-red-500">上午十点</span> = 10 AM
        </li>
        <li>
          <span className="text-red-500">下午五点十分</span> = 5:10 PM
        </li>
      </ul>

      <h2 className="font-bold text-base">📌 Summary</h2>
      <ul className="list-disc pl-6 space-y-1">
        <li>
          Dates go from <strong>year → month → day</strong> (no slashes or
          commas).
        </li>
        <li>
          Say years <strong>digit-by-digit</strong>.
        </li>
        <li>
          Weekdays follow <span className="text-red-500">星期 + number</span>{" "}
          (Sunday is irregular).
        </li>
        <li>
          For time: use <span className="text-red-500">点</span> (hour),{" "}
          <span className="text-red-500">分</span> (minute),{" "}
          <span className="text-red-500">半</span> (half), and{" "}
          <span className="text-red-500">上午 / 下午</span> for AM/PM.
        </li>
      </ul>
    </div>
  ),
};

export default function Rules() {
  const [selected, setSelected] = useState("Tones");
  return (
    <div className="text-black bg-slate-50 min-h-screen">
      <Navbar />
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r p-4">
          <ul className="space-y-2">
            {rules.map((rule, index) => (
              <li
                key={index}
                className="cursor-pointer p-2 rounded hover:bg-gray-200"
                onClick={() => setSelected(rule)}
              >
                {rule}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main content area */}
        <main className="flex-1 p-6 overflow-y-scroll">
          <h1 className="text-2xl font-bold mb-4">{selected}</h1>
          <div>{ruleContent[selected]}</div>
          {/* Selected rule content */}
        </main>
      </div>
      <Footer />
    </div>
  );
}
