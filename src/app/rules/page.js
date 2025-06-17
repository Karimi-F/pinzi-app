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
];

const ruleContent = {
  Tones: (
    <div>
      <h3>
        Mandarin has five tones. Each one gives a word a different meaning, even
        if the letters stay the same.
      </h3>
      <h1>THE TONE TABLE</h1>
      <h4>Tone Rules</h4>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <span>Tones are not optional.</span>
            <p>Changing the tone changes the word completely.</p>
          </div>
        </li>
        <li>
          <div>
            <span>Learn tones with words, not just syllables.</span>
            <p>
              Don’t memorize “mǎ” by itself. Learn mǎi dōngxi (buy stuff). Tones
              stick better with context.
            </p>
          </div>
        </li>
        <li>
          <div>
            <span>Neutral tone = soft, light, unstressed.</span>
            <p>Often used in particles like 吗 (ma), 呢 (ne), 吧 (ba).</p>
          </div>
        </li>
      </ol>
      <h3>Tone Change Rules (Tone Sandhi)</h3>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <p>Two 3rd tones in a row?</p>
            <p>First becomes 2nd tone.</p>
            <span>Examples:</span>
            <ul className="list-disc">
              <li>→ nǐ hǎo = ní hǎo</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p> “一” (yī) changes tone:</p>
            <p>First becomes 2nd tone.</p>
            <span>Examples:</span>
            <ul className="list-disc">
              <li>Before 4th tone → becomes 2nd tone → 一样 = yí yàng</li>
              <li>Before other tones → becomes 4th tone → 一百 = yì bǎi</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p> “不” (bù) changes tone:</p>
            <span>Examples:</span>
            <ul className="list-disc">
              <li>Before 4th tone → becomes 2nd tone → 不对 = bú duì</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  Pinyin: (
    <div>
      <h4>What is Pinyin? </h4>
      <p>
        Pinyin is the Romanized spelling system used to represent Mandarin
        pronunciation using the Latin alphabet. It's made up of initials
        (consonants), finals (vowel sounds), and tones.
      </p>
      <h4> Pinyin Rules</h4>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <div>
            <p>Pinyin syllables = Initial + Final + Tone</p>
            <span className="italic">Examples:</span>
            <ul className="list-disc">
              <li>mā = m (initial) + a (final) + 1st tone</li>
              <li>xiè = x + ie + 4th tone</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p>Spelling Rule: Tone marks always go on the main vowel</p>
            <p>Order of importance: a &gt; o &gt; e &gt; i &gt; u &gt; ü</p>
            <span className="italic">Examples:</span>
            <ul className="list-disc">
              <li>hao → hǎo (mark goes on "a")</li>
              <li>xue → xuě (mark goes on "e")</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p>Special spelling changes (Pinyin quirks):</p>
            <p>Some letters are just disguises 👀 and they include:</p>
            <span className="italic">
              ü → u after j, q, x, y (so "ju" is really "jü")
            </span>
            <ul className="list-disc">
              <p>y/w used to represent standalone vowels:</p>
              <li>yi = i</li>
              <li>wu = u</li>
              <li>yu = ü</li>
            </ul>
          </div>
        </li>
        <li>
          <div>
            <p>Pinyin ≠ English pronunciation</p>
            <p>Some letters sound very different:</p>
            <span className="italic">Examples:</span>
            <ul className="list-disc">
              <li>c = "ts" (like cats) → cài = tsài</li>
              <li>x = "sh" but with spread lips → xīn = sheen</li>
              <li>q = like "ch" but tighter → qì = chee</li>
              <li>zh = like "j" → zhōng = jong</li>
            </ul>
          </div>
        </li>
      </ol>
    </div>
  ),
  "Hanzi & Stroke Order": (
    <div>Talks about the stroke order when writing Hanzi</div>
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
      Particles are function words. They don’t hold standalone meaning but affect the <strong>tone</strong>, <strong>grammar</strong>, or <strong>structure</strong> of a sentence.
    </p>

    <h2 className="font-semibold text-base">3 Types of Particles</h2>
    <ol className="list-decimal pl-6 space-y-3">
      <li>
        <div>
          <strong>Modal (语气助词)</strong> – affect tone/attitude  
          <p className="mt-1">Examples: <span className="font-semibold text-red-500">吗, 呢, 吧, 啊, 呀, 嘛</span></p>
        </div>
      </li>
      <li>
        <div>
          <strong>Aspect (动态助词)</strong> – indicate verb aspect
          <p className="mt-1">Examples: <span className="font-semibold text-red-500">了, 过, 着</span></p>
        </div>
      </li>
      <li>
        <div>
          <strong>Structural (结构助词)</strong> – show grammatical relationship
          <p className="mt-1">Examples: <span className="font-semibold text-red-500">的, 得, 地</span></p>
        </div>
      </li>
    </ol>

    <h2 className="text-base font-bold">Modal Particles – Change Tone / Attitude</h2>
    <ol className="list-decimal pl-6 space-y-6">
      <li>
        <div>
          <p><strong>吗 (ma)</strong> – Yes/No question marker</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">你喜欢汉语。</span> = You like Chinese.</li>
            <li><span className="text-red-500">你喜欢汉语吗？</span> = Do you like Chinese?</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>Add it at the end of a statement. <strong>Not used with question words</strong> like <span className="text-red-500">谁</span> (who), <span className="text-red-500">什么</span> (what).</p>
        </div>
      </li>

      <li>
        <div>
          <p><strong>呢 (ne)</strong> – Bounce-back question or ongoing action marker</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">我喜欢你，你呢？</span> = I like you. What about you?</li>
            <li><span className="text-red-500">他在吃饭呢。</span> = He’s eating (right now).</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>Used to bounce back a question ("what about…?") or show something ongoing.</p>
        </div>
      </li>

      <li>
        <div>
          <p><strong>吧 (ba)</strong> – Suggestion, assumption, or soft command</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">我们走吧！</span> = Let’s go!</li>
            <li><span className="text-red-500">你是新生吧？</span> = You’re a new student, right?</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>Makes the sentence more casual, polite, or tentative.</p>
        </div>
      </li>

      <li>
        <div>
          <p><strong>啊 (a) / 呀 (ya) / 嘛 (ma)</strong> – Emotive emphasis</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">好啊！</span> = Great!</li>
            <li><span className="text-red-500">快点儿嘛！</span> = Come on, hurry up!</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>
            These add <strong>emotion</strong> — excitement, emphasis, or persuasion. <span className="text-red-500">呀</span> is a soft “ah” after vowels. <span className="text-red-500">嘛</span> adds a sassy or insistent tone.
          </p>
        </div>
      </li>
    </ol>

    <h2 className="text-base font-bold">Aspect Particles – Indicate Verb Completion or Experience</h2>
    <ol className="list-decimal pl-6 space-y-6">
      <li>
        <div>
          <p><strong>了 (le)</strong> – Completed action or change</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">我吃了饭。</span> = I ate.</li>
            <li><span className="text-red-500">天气冷了。</span> = It’s gotten cold.</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>Goes after the verb (for completed action) or at the sentence end (for change).</p>
        </div>
      </li>

      <li>
        <div>
          <p><strong>过 (guo)</strong> – Indicates life experience</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">我去过中国。</span> = I’ve been to China.</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>Goes after the verb. Doesn’t say *when* — just that it happened before.</p>
        </div>
      </li>

      <li>
        <div>
          <p><strong>着 (zhe)</strong> – Ongoing state or result</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">门开着。</span> = The door is open.</li>
            <li><span className="text-red-500">他笑着说话。</span> = He spoke while smiling.</li>
          </ul>
          <p className="mt-2 font-medium">Note:</p>
          <p>Goes after the verb. Often paired with another verb for parallel actions.</p>
        </div>
      </li>
    </ol>

    <h2 className="text-base font-bold">Structural Particles – Grammar Glue</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>的 (de)</strong> – Links nouns to adjectives (e.g., <span className="text-red-500">漂亮的女孩</span> = pretty girl)</li>
      <li><strong>得 (de)</strong> – Links verbs to adverbs (e.g., <span className="text-red-500">跑得快</span> = run fast)</li>
      <li><strong>地 (de)</strong> – Turns adjectives into adverbs (e.g., <span className="text-red-500">认真地听</span> = listen attentively)</li>
    </ul>
  </div>
),
  "Verb Tense Markers": (
  <div className="space-y-6">
    <p>
      Mandarin cares more about whether an action is <strong>complete, ongoing, repeated, or experienced</strong> —
      not when exactly it happened. Instead of changing the verb itself, Chinese uses particles and time words.
    </p>

    <h2 className="text-lg font-semibold">Main Verb Aspect Markers</h2>
    <p>Here are the 3 tense-like markers every learner should know:</p>
    <ul className="list-disc pl-6 space-y-1">
      <li><strong>了 (le)</strong> – Completed action / change</li>
      <li><strong>过 (guo)</strong> – Past experience</li>
      <li><strong>着 (zhe)</strong> – Ongoing state</li>
    </ul>

    <ol className="list-decimal pl-6 space-y-6">
      <li>
        <div>
          <h3 className="font-bold text-base mb-1">了 (le) – Completion or Change</h3>
          <p className="font-medium">Action is done:</p>
          <p><span className="text-red-500">我吃了饭。</span> = I ate.</p>
          <p className="font-medium mt-2">Change in state:</p>
          <p><span className="text-red-500">天气冷了。</span> = It’s gotten cold.</p>
          <p className="mt-2 font-semibold">Note:</p>
          <ul className="list-disc pl-6">
            <li>Goes <strong>after the verb</strong> for completed actions.</li>
            <li>Goes <strong>at sentence end</strong> for state change.</li>
            <li><span className="italic">Don’t overuse "了" — only use when emphasizing completion or change.</span></li>
          </ul>
        </div>
      </li>

      <li>
        <div>
          <h3 className="font-bold text-base mb-1">过 (guo) – Life Experience / “Ever Done It”</h3>
          <p className="font-medium">Used to show past experiences you’ve had:</p>
          <p><span className="text-red-500">我看过那部电影。</span> = I’ve seen that movie.</p>
          <p className="mt-2 font-semibold">Note:</p>
          <ul className="list-disc pl-6">
            <li>Placed <strong>after the verb</strong>.</li>
            <li>Often paired with <span className="text-red-500">曾经</span> (céngjīng) or <span className="text-red-500">以前</span> (yǐqián) for clarity.</li>
            <li>It emphasizes experience, not time.</li>
          </ul>
        </div>
      </li>

      <li>
        <div>
          <h3 className="font-bold text-base mb-1">着 (zhe) – Ongoing Action / State</h3>
          <p className="font-medium">Describes ongoing or static states:</p>
          <p><span className="text-red-500">他笑着说话。</span> = He spoke while smiling.</p>
          <p><span className="text-red-500">门开着。</span> = The door is open.</p>
          <p className="mt-2 font-semibold">Note:</p>
          <ul className="list-disc pl-6">
            <li>Placed <strong>after the verb</strong>.</li>
            <li>Often combines with another verb to show ongoing action with something else happening.</li>
            <li>It’s like “-ing,” but passive: describing the state of something as it stays that way.</li>
          </ul>
        </div>
      </li>
    </ol>
  </div>
),
"Negation": (
  <div className="space-y-8">
    <p>
      Mandarin doesn’t use “not” or “no” like English — it uses specific negative words depending 
      on tense, verb type, and tone.
    </p>

    <ol className="list-decimal pl-6 space-y-8">
      {/* 1. 不 */}
      <li>
        <h2 className="text-lg font-semibold">Use 不 (bù) for General, Habitual, or Future Negation</h2>
        <p className="font-medium">Usage Examples:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>我不吃肉。= I don’t eat meat.</li>
          <li>我不想去。= I don’t want to go.</li>
          <li>明天我不上班。= I won’t work tomorrow.</li>
        </ul>
        <p className="mt-2 font-medium">Notes:</p>
        <ul className="list-disc pl-6 space-y-1">
          <li>Always goes before the verb.</li>
          <li>Used for present/future habits, refusals, or permanent truths.</li>
          <li><strong>Pro Tip:</strong> "不" is flat, almost firm — like drawing a boundary.</li>
        </ul>
      </li>

      {/* 2. 没 */}
      <li>
        <h2 className="text-lg font-semibold">Use 没 (méi) for Past or Nonexistence</h2>
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
          <li>Think of 没 as the past-tense "nope" or “haven’t done it yet.”</li>
        </ul>
      </li>

      {/* 3. 不 vs 没 */}
      <li>
        <h2 className="text-lg font-semibold">Don’t Mix 不 and 没 Interchangeably</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border text-sm text-left">
            <thead className="bg-gray-100 dark:bg-gray-800">
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
        <h2 className="text-lg font-semibold">The Verb 有 (yǒu) is Always Negated with 没</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>我没有时间。= I don’t have time.</li>
          <li>他没有女朋友。= He doesn’t have a girlfriend.</li>
        </ul>
        <p className="mt-2"><strong>Note:</strong> Never use 不有 ❌. It’s not a thing.</p>
      </li>

      {/* 5. 不 + adjectives / modals */}
      <li>
        <h2 className="text-lg font-semibold">Use 不 with Adjectives and Modal Verbs</h2>
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
        <p className="mt-2"><strong>Note:</strong> "不" is the go-to for verbs that express intent, possibility, or identity.</p>
      </li>

      {/* 6. Double Negatives */}
      <li>
        <h2 className="text-lg font-semibold">Double Negatives = Positive or Emphasis</h2>
        <p>我不是不知道。= “It’s not that I don’t know.” (aka "Of course I know.")</p>
        <p className="mt-2"><strong>Note:</strong> Double negatives exist for dramatic or emotional emphasis.</p>
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
    <h2 className="text-xl font-semibold text-gray-900">📘 Grammar Rules → Pronouns (代词 dàicí)</h2>
    <p>Mandarin pronouns don’t change based on case like in English (I/me/my/mine). They stay the same form — context does the heavy lifting.</p>

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
        <p>他, 她, 它 all sound like “tā”. You’ll know the meaning from context.</p>
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
        <p className="italic mt-1">Drop 的 in casual settings: 我妈妈 = my mom</p>
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
"Question Words":(
  <div className="space-y-6">
    <h1 className="text-lg font-bold">Mandarin Question Words (疑问词 yíwèncí)</h1>
    <p>
      In Mandarin, question words replace the part of the sentence you're asking about — the rest of the sentence structure stays mostly the same.
    </p>

    <h2 className="font-semibold text-base">Core Sentence Structure</h2>
    <p>
      Mandarin uses a normal statement structure even in questions: <br />
      <strong>Subject + Time + Place + [Question Word] + Verb + Object</strong>
    </p>
    <p>
      You just drop the question word in where the answer would normally go. No need to move stuff around like in English.
    </p>

    <h2 className="text-base font-bold">Essential Question Words</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><strong>什么 (shénme)</strong> – What (e.g., <span className="text-red-500">你在看什么？</span> = What are you watching?)</li>
      <li><strong>谁 (shéi)</strong> – Who (e.g., <span className="text-red-500">谁是你的老师？</span> = Who is your teacher?)</li>
      <li><strong>哪里 / 哪儿 (nǎlǐ / nǎr)</strong> – Where (e.g., <span className="text-red-500">你要去哪里？</span> = Where are you going?)</li>
      <li><strong>什么时候 (shénme shíhou)</strong> – When (e.g., <span className="text-red-500">你什么时候来？</span> = When are you coming?)</li>
      <li><strong>为什么 (wèishénme)</strong> – Why (e.g., <span className="text-red-500">你为什么哭？</span> = Why are you crying?)</li>
      <li><strong>怎么 (zěnme)</strong> – How / Why (e.g., <span className="text-red-500">你怎么去学校？</span> = How do you get to school?)</li>
      <li><strong>哪 / 哪个 (nǎ / nǎge)</strong> – Which (e.g., <span className="text-red-500">你喜欢哪个电影？</span> = Which movie do you like?)</li>
      <li><strong>哪些 (nǎxiē)</strong> – Which ones (plural) (e.g., <span className="text-red-500">你看过哪些电影？</span> = Which movies have you seen?)</li>
    </ul>

    <h2 className="text-base font-bold">Quick Rules & Tips</h2>
    <ol className="list-decimal pl-6 space-y-6">
      <li>
        <div>
          <p><strong>Don’t change the word order</strong> – Just insert the question word where the answer would go.</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">你在看电影。</span> → <span className="text-red-500">你在看什么？</span></li>
          </ul>
        </div>
      </li>

      <li>
        <div>
          <p><strong>Question words don’t mix with 吗</strong> – That’s a redundancy error.</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="line-through text-gray-500">你喜欢什么吗？</span></li>
            <li><span className="text-red-500">你喜欢什么？</span> ✅</li>
          </ul>
        </div>
      </li>

      <li>
        <div>
          <p><strong>怎么 (zěnme)</strong> has 3 uses:</p>
          <ul className="list-disc pl-6 mt-2">
            <li>How (manner) → <span className="text-red-500">你怎么写这个字？</span></li>
            <li>Why (casual) → <span className="text-red-500">你怎么不说话？</span></li>
            <li>How come (vibe check) → <span className="text-red-500">你怎么来了？</span></li>
          </ul>
        </div>
      </li>

      <li>
        <div>
          <p><strong>谁 (shéi)</strong> can be subject or object</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">谁是老师？</span> = Who is the teacher?</li>
            <li><span className="text-red-500">你看见谁了？</span> = Who did you see?</li>
          </ul>
        </div>
      </li>

      <li>
        <div>
          <p><strong>什么时候 (shénme shíhou)</strong> always refers to time — just place it where a time phrase would go.</p>
          <ul className="list-disc pl-6 mt-2">
            <li><span className="text-red-500">你什么时候去？</span></li>
            <li><span className="text-red-500">老师什么时候来？</span></li>
          </ul>
        </div>
      </li>
    </ol>

    <h2 className="text-base font-bold">Combo Questions</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li><span className="text-red-500">你为什么想去那个地方？</span> = Why do you want to go to that place?</li>
      <li><span className="text-red-500">谁在什么时候打电话给你？</span> = Who called you and when?</li>
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
"Numbers and Counting" :(
  <div>
    <h1>数字 (Numbers & Counting)</h1>
    <p>Mandarin numbers are logical, base-10, and super regular. Once you get the hang of it, you can count anything.</p>

    <h2>🔢 Basic Numbers (0–10)</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>0 = 零 (líng)</li>
      <li>1 = 一 (yī)</li>
      <li>2 = 二 (èr)</li>
      <li>3 = 三 (sān)</li>
      <li>4 = 四 (sì)</li>
      <li>5 = 五 (wǔ)</li>
      <li>6 = 六 (liù)</li>
      <li>7 = 七 (qī)</li>
      <li>8 = 八 (bā)</li>
      <li>9 = 九 (jiǔ)</li>
      <li>10 = 十 (shí)</li>
    </ul>

    <h2>✅ Numbers 11–99</h2>
    <p>Pattern: [Tens digit] + 十 + [Ones digit]</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>11 = 十一 (shí yī)</li>
      <li>24 = 二十四 (èr shí sì)</li>
      <li>39 = 三十九 (sān shí jiǔ)</li>
      <li>99 = 九十九 (jiǔ shí jiǔ)</li>
    </ul>
    <p className="mt-2"><strong>Rule:</strong> If there’s no ones digit, just drop it. (e.g. 40 = 四十)</p>

    <h2>✅ Special Case: 两 (liǎng)</h2>
    <p>Use 两 instead of 二 when referring to quantities, measure words, or time.</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>两个人 = Two people</li>
      <li>两点 = Two o’clock</li>
      <li>二楼 = Second floor</li>
    </ul>
    <p><strong>Rule:</strong> Use 二 when counting or listing numbers, 两 when measuring or quantifying.</p>

    <h2>✅ Hundreds, Thousands, Ten-Thousands</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>100 = 一百 (yī bǎi)</li>
      <li>101 = 一百零一 (yī bǎi líng yī)</li>
      <li>215 = 二百一十五 (èr bǎi yī shí wǔ)</li>
      <li>1,000 = 一千 (yī qiān)</li>
      <li>10,000 = 一万 (yī wàn)</li>
    </ul>
    <p>
      <strong>Rules:</strong> Use 零 (líng) to fill in missing digits. Numbers group by ten-thousands — e.g., 100,000 = 十万 (shí wàn), not “a hundred thousand”.
    </p>

    <h2>🧾 Quick Summary</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>零 is used to skip digits (e.g. 105 = 一百零五).</li>
      <li>两 is used for quantities and time, 二 is for counting.</li>
      <li>Chinese uses 10,000 as a base unit, not 1,000 like English.</li>
    </ul>
  </div>
),
"Time and Dates":(
  <div>
    <h1>日期和时间 (Dates & Time)</h1>
    <p>Mandarin expresses time and dates from largest to smallest: year → month → day. It’s structured and simple.</p>

    <h2>📅 Dates: Year, Month, Day</h2>
    <h3>Years</h3>
    <p>Say each digit separately, followed by 年 (nián):</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>2025年 = 二零二五年 (èr líng èr wǔ nián)</li>
      <li>1989年 = 一九八九年 (yī jiǔ bā jiǔ nián)</li>
    </ul>

    <h3>Months</h3>
    <p>Add 月 (yuè) after the number:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>一月 = January</li>
      <li>十二月 = December</li>
    </ul>

    <h3>Days</h3>
    <p>Add 日 (rì, written) or 号 (hào, spoken):</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>一日 = 1st (formal)</li>
      <li>十五号 = 15th (spoken)</li>
    </ul>

    <h3>Full Date Example</h3>
    <p>今天是 2025年6月11日。= Today is June 11, 2025</p>

    <h2>📆 Days of the Week</h2>
    <p>Pattern: 星期 + number</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>星期一 = Monday</li>
      <li>星期二 = Tuesday</li>
      <li>星期三 = Wednesday</li>
      <li>星期四 = Thursday</li>
      <li>星期五 = Friday</li>
      <li>星期六 = Saturday</li>
      <li>星期天 / 星期日 = Sunday</li>
    </ul>
    <p><strong>Note:</strong> Sunday is irregular — uses 天 (tiān) or 日 (rì)</p>

    <h2>⏰ Time Expressions</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>点 (diǎn) = o’clock</li>
      <li>分 (fēn) = minutes</li>
      <li>半 (bàn) = half past</li>
      <li>上午 / 下午 = AM / PM</li>
    </ul>
    <p>Examples:</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>现在三点半。= It’s 3:30.</li>
      <li>上午十点 = 10 AM</li>
      <li>下午五点十分 = 5:10 PM</li>
    </ul>

    <h2>📌 Summary</h2>
    <ul className="list-disc pl-6 space-y-2">
      <li>Dates go from year → month → day (no slashes or commas).</li>
      <li>Say years digit-by-digit.</li>
      <li>Weekdays follow 星期 + number (Sunday is irregular).</li>
      <li>For time: use 点 (hour), 分 (minute), 半 (half), 上午/下午 for AM/PM.</li>
    </ul>
  </div>
)
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
