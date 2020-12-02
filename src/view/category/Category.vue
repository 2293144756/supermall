<template>
	<div class="category">
       <scroll id="scroll" ref="finsh" :probe-type="3" @pullingUp="content" @scroll="box">
		   <ul class="ul">
		   	<li>11</li>
		   	<li>12</li>
		   	<li>13</li>
		   	<li>14</li>
		   	<li>15</li>
		   	<li>16</li>
		   	<li>17</li>
		   	<li>18</li>
		   	<li>19</li>
		   	<li>110</li>
		   	<li>111</li>
		   	<li>112</li>
		   	<li>113</li>
		   	<li>114</li>
		   	<li>115</li>
		   	<li>116</li>
		   	<li>117</li>
		   	<li>118</li>
		   	<li>119</li>
		   	<li>120</li>
		   	<li>121</li>
		   	<li>122</li>
		   	<li>123</li>
		   	<li>124</li>
		   	<li>125</li>
		   	<li>126</li>
		   	<li>127</li>
		   	<li>128</li>
		   	<li>129</li>
		   	<li>130</li>
		   	<li>131</li>
		   	<li>132</li>
		   	<li>133</li>
		   	<li>134</li>
		   	<li>135</li>
		   	<li>136</li>
		   	<li>137</li>
		   	<li>138</li>
		   	<li>139</li>
		   	<li>140</li>
		   	<li>141</li>
		   	<li>142</li>
		   	<li>143</li>
		   	<li>144</li>
		   	<li>145</li>
		   	<li>146</li>
		   	<li>147</li>
		   	<li>148</li>
		   	<li>149</li>
		   	<li>150</li>
		   </ul>
	   </scroll>
	</div>
</template>

<script>
	import Scroll from '../../components/common/scroll/Scroll.vue'
	export default {
		name:'Category',
		components:{
			Scroll
		},
		methods:{
			content()
			{
				console.log("上拉加载更多")
				this.$refs.finsh.finishPullUp()
				
			},
			box(position)
			{
				console.log(position)
			}
			
		}
	}
</script>

<style>
	.category {
		height: 100vh;
	}
	#scroll {
		height: 300px;
		overflow: hidden;
		background: red;
	}
</style>
