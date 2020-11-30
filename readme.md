<article class="markdown-body entry-content container-lg" itemprop="text"><h2><a id="user-content-checkout" class="anchor" aria-hidden="true" href="#checkout"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Checkout</h2>
<p>The purpose of this challenge is to implement a supermarket checkout that calculates the total price of a number of items - to be run in a REPL like IRB. Don't worry about I/O.</p>
<h3><a id="user-content-requirements" class="anchor" aria-hidden="true" href="#requirements"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Requirements</h3>
<p>In a normal supermarket, things are identified using Stock Keeping Units, or SKUs.
In our store, we'll use individual letters of the alphabet (A, B, C, and so on).
Our goods are priced individually. In addition, some items are multi-priced: buy n of them, and they'll cost you y pounds.</p>
<p>For example, item A might cost 50 pounds individually, but this week we have a special offer:</p>
<ul>
<li>buy three As and they'll cost you 130.</li>
</ul>
<p>Our price table and offers:</p>
<pre><code>+------+-------+----------------+
| Item | Price | Special offers |
+------+-------+----------------+
| A    | 50    | 3A for 130     |
| B    | 30    | 2B for 45      |
| C    | 20    |                |
| D    | 15    |                |
+------+-------+----------------+
</code></pre>
<p>Notes:</p>
<ul>
<li>For any illegal input (non capitals) simply return -1</li>
</ul>
<p><strong>In order to complete the round you need to implement the following method:
checkout(String) -&gt; Integer</strong></p>
<p>Where:</p>
<ul>
<li>param[0] = eg. 'AAB', a String containing the SKUs of all the products in the basket</li>
<li>@return = eg. 120, an Integer representing the total checkout value of the items</li>
</ul>
<h3><a id="user-content-acceptance-criteria" class="anchor" aria-hidden="true" href="#acceptance-criteria"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>Acceptance Criteria</h3>
<div class="highlight highlight-source-ruby"><pre><span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-s">'aBc'</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; -1</span>
<span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-s">'-B8x'</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; -1</span>
<span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-c1">18</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; -1</span>
<span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-s">'AA'</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; 100</span>
<span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-s">'ABCD'</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; 115</span>
<span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-s">'AAA'</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; 130</span>
<span class="pl-en">shop</span><span class="pl-kos">.</span><span class="pl-en">checkout</span><span class="pl-kos">(</span><span class="pl-s">'AAAAAA'</span><span class="pl-kos">)</span> <span class="pl-c"># =&gt; 260</span></pre></div>
</article>
